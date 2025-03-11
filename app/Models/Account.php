<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Account extends Model {
    protected $primaryKey = 'account_id';

    use HasFactory;
    protected $fillable = [
        'user_id',
        'registration_date',
        'age',
        'gender',
        'fitness_level',
        'weight',
        'height',
        'profile_picture',
    ];
    public function subscription()
    {
        return $this->belongsTo(Subscription::class, 'subscription_id', 'subscription_id');
    }

    // Beziehungen für Messages
    public function sentMessages()
    {
        return $this->morphMany(Message::class, 'sender');
    }

    public function receivedMessages()
    {
        return $this->morphMany(Message::class, 'receiver');
    }


    public function trainingPlans()
    {
        return $this->belongsToMany(TrainingPlan::class, 'account_training_plan', 'account_id', 'training_plan_id');
    }



    public function exercises()
    {
        return $this->belongsToMany(Exercise::class, 'account_exercise', 'account_id', 'exercise_id')
            ->withPivot('completed_at')->withTimestamps(); //time of finish
    }


    public function favoriteRecipes()
    {
        return $this->belongsToMany(Recipe::class, 'favorites', 'account_id', 'recipe_id')
            ->withTimestamps();
    }


    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

}
