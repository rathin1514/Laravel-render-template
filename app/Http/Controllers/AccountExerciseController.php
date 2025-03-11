<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Exercise;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AccountExerciseController extends Controller
{
    public  function finishExercise(Request $request, $trainingPlanId, $exerciseId,){

        $user = auth()->user();
        $userId = auth()->id();

        $account = Account::where('user_id', $userId)->first();

        if (!$account) {
            return response()->json([
                'message' => 'No account associated with the user',
            ], 404);
        }

        $trainingPlan = $account->trainingPlans()->where('account_training_plan.training_plan_id', $trainingPlanId)->first();

        if (!$trainingPlan) {
            return response()->json([
                'message' => 'Training plan not associated with the account',
            ], 404);
        }

        $exercise = $trainingPlan->exercises()->where('exercise_training_plan.exercise_id', $exerciseId)->first();

        if (!$exercise) {
            return response()->json([
                'message' => 'Exercise not associated with the training plan',
            ], 404);
        }

        $completedExercise = $account->exercises()->where('account_exercise.exercise_id', $exerciseId)->first();

        if ($completedExercise && $completedExercise->pivot->completed_at) {
            return response()->json([
                'message' => 'Exercise already completed',
            ], 409);
        }

        $account->exercises()->syncWithoutDetaching([
            $exerciseId => ['completed_at' => now()],
        ]);

        return response()->json([
            'message' => 'Exercise marked as completed',
            'exercise_id' => $exerciseId,
            'completed_at' => now(),
        ], 200);
    }

}
