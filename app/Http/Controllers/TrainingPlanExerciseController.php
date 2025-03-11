<?php

namespace App\Http\Controllers;

use App\Models\TrainingPlan;
use Illuminate\Http\Request;

class TrainingPlanExerciseController extends Controller
{
    public function show($trainingPlanId)
    {
        $trainingPlanId = TrainingPlan::with('exercises')->findOrFail($trainingPlanId);

        if (!$trainingPlanId) {
            return response()->json([
                'message' => 'Training plan not found',
            ], 404);
        }

        $exercises = $trainingPlanId->exercises;

        if($exercises->isEmpty()){
            return response()->json([
                'exercises' => [],
                'message' => 'No training exercises for this plan found',
            ], 200);
        }

        return response()->json([
            'trainingPlanId' => $trainingPlanId->training_plan_id,
            'exercises' => $exercises,
        ], 200);
    }

    public function update(Request $request, $trainingPlanId){

        $trainingPlan = TrainingPlan::with('exercises')->findOrFail($trainingPlanId);
        if (!$trainingPlanId) {
            return response()->json([
                'message' => 'Training plan not found',
            ], 404);
        }

        $validated = $request->validate(['exercise_id' => 'required|exists:exercises,exercise_id']);

        if($trainingPlan->exercises()->where('exercise_training_plan.exercise_id', $validated['exercise_id'])->exists()){
            return response()->json([
                'message' => 'This exercise is already in this training plan',
            ], 409);
        }

        $trainingPlan->exercises()->attach($validated['exercise_id']);

        return response()->json([
            'message' => 'Exercise added to training plan successfully',
        ], 201);
    }

    public function removeExercise(Request $request, $trainingPlanId, $exerciseId)
    {
        $trainingPlan = TrainingPlan::with('exercises')->findOrFail($trainingPlanId);

        if (!$trainingPlan->exercises()->where('exercise_training_plan.exercise_id', $exerciseId)->exists()) {
            return response()->json([
                'message' => 'This exercise is not in the training plan',
            ], 404);
        }

        $trainingPlan->exercises()->detach($exerciseId);

        return response()->json([
            'message' => 'Exercise removed from training plan successfully',
        ], 200);
    }
}
