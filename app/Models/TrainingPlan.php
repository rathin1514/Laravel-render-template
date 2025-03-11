<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class TrainingPlan extends Model
{
    use HasFactory;
    protected $primaryKey = 'training_plan_id';
    protected $fillable = [
        'title',
        'description',
        'goal',
        'level',
        'picture',
        'created_by'
    ];


    public function accounts()
    {
        return $this->belongsToMany(Account::class, 'accounts', 'training_plan_id', 'account_id');
    }

    public function exercises()
    {
        return $this->belongsToMany(Exercise::class, 'exercise_training_plan', 'training_plan_id', 'exercise_id');
    }

    public function createdBy()
    {
        return $this->belongsTo(Admin::class, 'created_by', 'admin_id');
    }

}
