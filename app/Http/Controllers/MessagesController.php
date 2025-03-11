<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Models\Message;
use App\Models\Trainer;
use App\Models\Account;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
class MessagesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $messages = Message::all(); // Alle Nachrichten abrufen
        return response()->json($messages);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //return $request;
        // Validierung der Eingabedaten
        $validated = $request->validate([
            'sender_id' => 'required|string', // oder Trainer, je nach deinem System
            'sender_type' => 'required|string|in:Account,Trainer',
            'receiver_id' => 'required|string', // oder Trainer, je nach deinem System
            'receiver_type' => 'required|string|in:Account,Trainer',
            'content' => 'required|string'
        ]);
        
        // Nachricht erstellen
        $message = Message::create($validated);

        // Erfolgsantwort zurückgeben
        return response()->json([
            'message' => 'Message created successfully',
            'data' => $message,
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $message = Message::find($id); // Nachricht anhand der ID abrufen
        if ($message) {
            return response()->json($message);
        } else {
            return response()->json(['message' => 'Message not found'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        dump("validate request store".$request);
        dump("validate id store  ".$id);
        dump("validate id store  ".Message::find($id));
        // Nachricht finden
        $message = Message::findOrFail($id);

        // Validierung der Eingabedaten
        $validated = $request->validate([
            'sender_id' => 'sometimes|integer', // Optional
            'sender_type' => 'sometimes|string|in:Account,Trainer',
            'receiver_id' => 'sometimes|integer',
            'receiver_type' => 'sometimes|string|in:Account,Trainer',
            'content' => 'sometimes|string',
            
        ]);
        
        // Nachricht aktualisieren
        $message->update($validated);

        // Erfolgsantwort zurückgeben
        return response()->json([
            'message' => 'Message updated successfully',
            'data' => $message,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Check if the current user is the sender of the message
        /*if (auth()->id() !== $message->sender_id&& auth()->user()->getMorphClass() !== $message->sender_type
        ||auth()->id() !== $message->receiver_id&& auth()->user()->getMorphClass() !== $message->receiver_type
        ) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }*/
        $message = Message::findOrFail($id)->delete();
        //$message->delete();

        /*return response()->json([
            'message' => 'Message deleted successfully',
        ], 200);*/
    }
    public function getUserMessages($accountId)
    {
        $userId = auth()->id();
        // Nachrichten, bei denen der User Sender oder Empfänger ist
        $messages = Message::where(function ($query) use ($accountId) {
            $query->where('sender_id', $accountId)
                ->where('sender_type', 'Account');
        })
        ->orWhere(function ($query) use ($accountId) {
            $query->where('receiver_id', $accountId)
                ->where('receiver_type', 'Account');
        })
        ->get();

        return response()->json([
            'account_id' => $accountId,
            'messages' => $messages,
        ], 200);
    }
    public function trainerIds()
    {  
        $user = Auth::user();  // Aktuell eingeloggter BenutzerMessage::where('tr
        $accountId = Account::where("user_id",$user->id)->first()->account_id;
        $messages = Message::where('sender_id', $accountId)
            ->where('sender_type', 'Account')
            ->orWhere('receiver_id', $accountId)
            ->where('receiver_type', 'Account')
        ->get();
        
        //return $messages;
        // Trainer-IDs aus den Nachrichten extrahieren
        $trainerIDs = $messages->filter(function ($message) {
            return $message->sender_type === 'Trainer' || $message->receiver_type === 'Trainer';
        })->map(function ($message) {
            return $message->sender_type === 'Trainer' ? $message->sender_id : $message->receiver_id;
        })->unique();
        
        $trainers = Trainer::whereIn('id', $trainerIDs)->select('id','first_name', 'last_name')->get();
        // Debugging entfernt, damit die JSON-Ausgabe korrekt erfolgt
        return response()->json([
            'trainer_ids' => $trainerIDs,
            'trainers'=> $trainers
        ], 200);
    }
    public function userIds()
    {  
        
        $trainerid = auth()->user()->trainer->id;
        
        $messages = Message::where('sender_id', $trainerid)
            ->where('sender_type', 'Trainer')
            ->orWhere('receiver_id', $trainerid)
            ->where('receiver_type', 'Trainer')
        ->get();
        
        //return $messages;
        // Trainer-IDs aus den Nachrichten extrahieren
        $account_ids = $messages->filter(function ($message) {
            return $message->sender_type === 'Account' || $message->receiver_type === 'Account';
        })->map(function ($message) {
            return $message->sender_type === 'Account' ? $message->sender_id : $message->receiver_id;
        })->unique();
        
        $account = Account::whereIn('account_id', $account_ids)->select('account_id')->get();
        
        $user = Account::whereIn('account_id', $account_ids)->select('user_id')->get();
        
        $userName = User::whereIn('id', $user)->select('name')->get();

        // Debugging entfernt, damit die JSON-Ausgabe korrekt erfolgt
        return response()->json([
            'account_ids' => $account_ids,
            'user_ids'=> $user,
            'name' => $userName
        ], 200);
    }
    public function userIDWithMessageLast(){
        $trainerid = auth()->user()->trainer->id;
        
        $messages = Message::where('sender_id', $trainerid)
            ->where('sender_type', 'Trainer')
            ->orWhere('receiver_id', $trainerid)
            ->where('receiver_type', 'Trainer')
        ->get();
        $account_ids = $messages->filter(function ($message) {
            return $message->sender_type === 'Account' || $message->receiver_type === 'Account';
        })->map(function ($message) {
            return $message->sender_type === 'Account' ? $message->sender_id : $message->receiver_id;
        })->unique();
        $accounts = Account::whereIn('account_id', $account_ids)->select('account_id', 'user_id')->get();
        $user = Account::whereIn('account_id', $account_ids)->select('user_id')->get();
        $userName = User::whereIn('id', $user)->select('name')->get();
        $Array = []; 
        foreach ($account_ids as $account_id) {
        $lastMessage = Message::where('sender_id', $account_id)
        ->where('sender_type', 'Account')
        ->orWhere('receiver_id', $account_id)
        ->where('receiver_type', 'Account')
        ->orderBy('timestamp', 'desc') // Nach Erstellungsdatum absteigend sortieren
        ->first();
        $Array[] = $lastMessage;
        }
        $userIds = $accounts->pluck('user_id'); // Extrahiere nur die user_id-Werte
        $users = User::whereIn('id', $userIds)->select('id', 'name')->get();

        // Ordne die Benutzernamen den user_id-Werten zu
        $userMap = $users->keyBy('id'); // Erstelle eine Map: ['user_id' => Benutzerobjekt]

        // Kombiniere die Daten
        $accountsWithUsers = $accounts->map(function ($account) use ($userMap) {
            return [
                'account_id' => $account->account_id,
                'user_id' => $account->user_id,
                'user_name' => optional($userMap->get($account->user_id))->name // Hole den Benutzernamen, falls vorhanden
            ];
        });
        return response()->json([
            'TrainerID' => $trainerid,
            'account_ids' => $accountsWithUsers,
            'lastMessages' => $Array,
        ], 200);
    }
    public function getTrainerMessages($trainerId)
    {
        // Nachrichten, bei denen der User Sender oder Empfänger ist
        $messages = Message::where(function ($query) use ($trainerId) {
            $query->where('sender_id', $trainerId)
                ->where('sender_type', 'Trainer');
        })
        ->orWhere(function ($query) use ($trainerId) {
            $query->where('receiver_id', $trainerId)
                ->where('receiver_type', 'Trainer');
        })
        ->get();

        return response()->json([
            'trainer_Id' => $trainerId,
            'messages' => $messages
        ], 200);
    }
    public function showLastMessage(Request $request)
    {

            // Eingabedaten validieren
        $validated = $request->validate([
            'account_id' => 'required|integer', // Account ID muss existieren
            'sender_type' => 'required|string|in:Account,Trainer' // Gültige Sender-Typen
        ]);
        $lastMessage = Message::where('sender_id', $validated['account_id'])
        ->where('sender_type', $validated['sender_type'])
        ->orWhere('receiver_id', $validated['account_id'])
        ->where('receiver_type', $validated['sender_type'])
        ->orderBy('timestamp', 'desc') // Nach Erstellungsdatum absteigend sortieren
        ->first();
        // Überprüfen, ob eine Nachricht gefunden wurde
        if (!$lastMessage) {
            return response()->json([
                'message' => 'No messages found for this account.',
            ], 404);
        }

        // Erfolgsantwort zurückgeben
        return response()->json([
            'message' => 'Last message retrieved successfully.',
            'data' => $lastMessage,
        ], 200);
    }
    public function getAllMessagesInChat($accountId, $trainerId)
    {
        // Abrufen aller Nachrichten zwischen dem User und dem Trainer
        $messages = Message::where(function ($query) use ($accountId, $trainerId) {
            $query->where('sender_id', $accountId)
                  ->where('sender_type', 'Account')
                  ->where('receiver_id', $trainerId)
                  ->where('receiver_type', 'Trainer');
        })->orWhere(function ($query) use ($accountId, $trainerId) {
            $query->where('sender_id', $trainerId)
                  ->where('sender_type', 'Trainer')
                  ->where('receiver_id', $accountId)
                  ->where('receiver_type', 'Account');
        })->orderBy('timestamp', 'asc') // Optional: Nachrichten chronologisch sortieren
          ->get();
    
        return response()->json([
            'status' => 'success',
            'messages' => $messages,
        ], 200);
    }
}
