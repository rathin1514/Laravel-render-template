<?php

namespace App\Http\Controllers;

use App\Models\TrainingPlan;
use Illuminate\Http\Request;
use App\Models\Account;
use Illuminate\Support\Facades\Auth;

class AccountTrainingsPlanController extends Controller
{
    public function show()
    {
        $user = auth()->user();
        $userId = auth()->id();

        $account = Account::where('user_id', $userId)->first();

        if ($account->subscription_id === 1) {
            if ($account->trainingPlans()->exists()) {
                return response()->json([
                    'trainingPlan' => $account->trainingPlans()->with('exercises')->get(),
                ], 200);
            }

            $recommendedPlan = TrainingPlan::where('level', $account->fitness_level)->first();

            if (!$recommendedPlan) {
                return response()->json([
                    'message' => 'No recommended training plan found for your level.',
                ], 404);
            }

            $account->trainingPlans()->attach($recommendedPlan->training_plan_id);

            return response()->json([
                'message' => 'Recommended training plan added successfully.',
                'trainingPlan' => $account->trainingPlans()->with('exercises')->get(),
            ], 200);
        }

        $trainingsPlan = $account->trainingPlans()->with('exercises')->get();

        if ($trainingsPlan->isEmpty()) {
            return response()->json([
                'message' => 'No training plan for this account',
            ], 404);
        }

        return response()->json([
            'trainingPlan' => $trainingsPlan,
        ], 200);
    }

    public function store(Request $request)
    {
        $user = auth()->user();
        $userId = auth()->id();

        $account = Account::where('user_id', $userId)->first();

        if ($account->subscription_id === 1) {
            return response()->json([
                'message' => 'You cannot add training plans with a Bronze subscription. Upgrade your subscription to add plans.',
            ], 403);
        }

        $validated = $request->validate(['training_plan_id' => 'required|exists:training_plans,training_plan_id',
        ]);

        if ($account->trainingPlans()->where('account_training_plan.training_plan_id', $validated['training_plan_id'])->exists()) {
            return response()->json([
                'message' => 'Training plan already exists',
            ], 409);
        }

        $account->trainingPlans()->attach($validated['training_plan_id']);

        return response()->json([
            'message' => 'Training plan added successfully',
        ],201);
    }

    public function destroy($trainingPlanId){

        $user = Auth::user();

        $account = $user->account;

        $trainingPlan = $account->trainingPlans()
            ->where('account_training_plan.training_plan_id', $trainingPlanId)
            ->first();

        if(!$trainingPlanId){
            return response()->json([
                'message' => 'Training plan not found',
            ], 404);
        }

        $account->trainingPlans()->detach($trainingPlanId);

        return response()->json([
            'message' => 'Training plan deleted successfully',
        ], 200);
    }

}
