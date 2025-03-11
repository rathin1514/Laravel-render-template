<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Account;
use App\Models\Admin;
use App\Models\Subscription;

use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class AccountControllerTest extends TestCase
{

    /**
     * A basic feature test example.
     */
    public function test_user_can_see_his_own_account_info()
    {
        $user = User::factory()->create();

        $account = Account::factory()->create([
            'user_id' => $user->id,
        ]);

        $this->actingAs($user);

        $response = $this->getJson('/api/account/info');

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'account' => [
                'age', 'weight', 'height',
            ],
            'user' => [
                'name', 'email',
            ],
        ]);

        $this->assertEquals($account->age, $response->json('account.age'));
    }

    public function test_guest_cannot_access_account_info()
    {
        $response = $this->getJson('/api/account/info');

        $response->assertStatus(401);
        $response->assertJson(['message' => 'Unauthenticated.']);
    }

    public function test_user_can_update_account_info()
    {
        $user = User::factory()->create();
        $account = Account::factory()->create(['user_id' => $user->id]);

        $this->actingAs($user);

        $updateData = [
            'age' => 30,
            'weight' => 75,
            'height' => 180,
            'name' => 'Updated Name',
        ];

        $response = $this->putJson('/api/account/update', $updateData);

        $response->assertStatus(200);
        $response->assertJson([
            'message' => 'Account updated successfully',
        ]);

        $this->assertDatabaseHas('accounts', [
            'user_id' => $user->id,
            'age' => 30,
            'weight' => 75,
            'height' => 180,
        ]);

        $this->assertDatabaseHas('users', [
            'id' => $user->id,
            'name' => 'Updated Name',
        ]);
    }

    public function test_user_with_valid_subscription_can_write_to_trainer()
    {
        $user = User::factory()->create();
        $account = Account::factory()->create([
            'user_id' => $user->id,
            'subscription_id' => 3,
        ]);

        $this->actingAs($user);

        $response = $this->getJson('/api/account/can-write-to-trainer');

        $response->assertStatus(200);
        $response->assertJson([
            'is_able_to_write' => true,
            'message' => 'User is able to write to trainer',
        ]);
    }

    public function test_user_can_delete_account()
    {
        $user = User::factory()->create();
        $account = Account::factory()->create(['user_id' => $user->id]);

        $this->actingAs($user);

        $response = $this->deleteJson('/api/account/destroy');

        $response->assertStatus(200);
        $response->assertJson(['message' => 'Account deleted successfully']);

        $this->assertDatabaseMissing('accounts', ['account_id' => $account->id]);
        $this->assertDatabaseHas('users', ['id' => $user->id]);
    }

    public function test_user_can_see_training_plans()
    {
        $user = User::factory()->create();
        $account = Account::factory()->create(['user_id' => $user->id]);

        $user1 = User::factory()->create();
        $admin = Admin::factory()->create(['user_id' => $user1->id]);

        $trainingPlans = $account->trainingPlans()->createMany([
            [
                'title' => 'Plan 1',
                'description' => 'Description 1',
                'goal' => 'Fitness',
                'level' => 'Beginner',
                'created_by' => $admin->admin_id,
            ],
            [
                'title' => 'Plan 2',
                'description' => 'Description 2',
                'goal' => 'Strength',
                'level' => 'Intermediate',
                'created_by' => $admin->admin_id,
            ],
        ]);

        $this->actingAs($user);

        $response = $this->getJson('/api/account/training-plans');

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'message',
            'account_id',
            'training_plans' => [
                '*' => ['training_plan_id', 'title', 'description', 'goal', 'level'],
            ],
        ]);
        $this->assertCount(2, $response->json('training_plans'));
    }

    public function test_non_admin_cannot_access_account_list()
    {
        $user = User::factory()->create();

        $this->actingAs($user);

        $response = $this->getJson('/api/accounts');

        $response->assertStatus(403);
        $response->assertJson(['message' => 'Access denied']);
    }

    public function test_user_with_invalid_subscription_cannot_write_to_trainer()
    {
        $user = User::factory()->create();
        $account = Account::factory()->create([
            'user_id' => $user->id,
            'subscription_id' => 2,
        ]);

        $this->actingAs($user);

        $response = $this->getJson('/api/account/can-write-to-trainer');

        $response->assertStatus(200);
        $response->assertJson([
            'is_able_to_write' => false,
            'message' => 'User is not allowed to write to trainer',
        ]);
    }

    public function test_user_cannot_see_training_plans_without_account()
    {
        $user = User::factory()->create();

        $this->actingAs($user);

        $response = $this->getJson('/api/account/training-plans');

        $response->assertStatus(403);
        $response->assertJson(['message' => 'Access denied']);
    }

    public function test_admin_can_access_account_list()
    {
        $initialCount = Account::count();

        $user1Admin = User::factory()->create();
        $admin = Admin::factory()->create(['user_id' => $user1Admin->id]);

        $this->actingAs($user1Admin);

        $response = $this->getJson('/api/accounts');

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'message',
            'accounts' => [
                '*' => ['account_id', 'user_id', 'age', 'weight', 'height', 'gender', 'fitness_level', 'subscription_id'],
            ],
        ]);

        $this->assertCount($initialCount, $response->json('accounts'));
    }

    public function test_admin_gets_404_when_account_not_found()
    {
        $user1Admin = User::factory()->create();
        $admin = Admin::factory()->create(['user_id' => $user1Admin->id]);

        $this->actingAs($user1Admin);

        $user = User::factory()->create();
        $existingAccount = Account::factory()->create([
            'user_id' => $user->id,
            'subscription_id' => null,
        ]);

        $nonExistentId = $existingAccount->account_id + 1;

        $response = $this->getJson('/api/accounts/show?id=' . $nonExistentId);

        $response->assertStatus(404);
        $response->assertJson(['message' => 'User not found']);
    }

    public function test_non_admin_cannot_view_account_details()
    {
        $user = User::factory()->create();
        $account = Account::factory()->create([
            'user_id' => $user->id,
            'subscription_id' => null,
        ]);

        $this->actingAs($user);

        $response = $this->getJson('/api/accounts/show?id=' . $account->account_id);

        $response->assertStatus(403);
        $response->assertJson(['message' => 'Access denied']);
    }

    public function test_user_cannot_update_account_with_invalid_data()
    {
        $user = User::factory()->create();
        $account = Account::factory()->create([
            'user_id' => $user->id,
            'subscription_id' => null,
        ]);

        $this->actingAs($user);

        $updateData = [
            'age' => 10,
            'email' => 'not-an-email',
        ];

        $response = $this->putJson('/api/account/update', $updateData);

        $response->assertStatus(400);
        $response->assertJsonStructure(['message']);
    }

    public function test_user_cannot_delete_without_account()
    {
        $user = User::factory()->create();

        $this->actingAs($user);

        $response = $this->deleteJson('/api/account/destroy');

        $response->assertStatus(403);
        $response->assertJson(['message' => 'Access denied']);
    }

    public function test_user_cannot_write_to_trainer_without_account()
    {
        $user = User::factory()->create();

        $this->actingAs($user);

        $response = $this->getJson('/api/account/can-write-to-trainer');

        $response->assertStatus(403);
        $response->assertJson(['message' => 'Access denied']);
    }

    public function test_user_cannot_update_info_without_account()
    {
        $user = User::factory()->create();

        $this->actingAs($user);

        $updateData = [
            'age' => 30,
        ];

        $response = $this->putJson('/api/account/update', $updateData);

        $response->assertStatus(403);
        $response->assertJson(['message' => 'Access denied']);
    }

    public function test_user_cannot_view_info_without_account()
    {
        $user = User::factory()->create();

        $this->actingAs($user);

        $response = $this->getJson('/api/account/info');

        $response->assertStatus(403);
        $response->assertJson(['message' => 'Access denied']);
    }

    public function test_user_can_update_subscription()
    {
        $user = User::factory()->create();
        $account = Account::factory()->create(['user_id' => $user->id]);



        $this->actingAs($user);

        $updateData = ['subscription_id' => 3];

        $response = $this->putJson('/api/account/update-subscription', $updateData);

        $response->assertStatus(200);
        $response->assertJson([
            'message' => 'Subscription updated successfully',
        ]);

        $this->assertDatabaseHas('accounts', [
            'user_id' => $user->id,
            'subscription_id' => 3,
        ]);
    }

    public function test_user_cannot_update_subscription_with_invalid_id()
    {
        $user = User::factory()->create();
        $account = Account::factory()->create(['user_id' => $user->id]);

        $this->actingAs($user);

        $updateData = ['subscription_id' => 99999];
        $response = $this->putJson('/api/account/update-subscription', $updateData);

        $response->assertStatus(400);
        $response->assertJson([
            'message' => 'Invalid subscription ID',
        ]);

        $this->assertDatabaseHas('accounts', [
            'user_id' => $user->id,
            'subscription_id' => $account->subscription_id,
        ]);
    }

    public function test_user_cannot_update_subscription_without_account()
    {
        $user = User::factory()->create();

        $this->actingAs($user);

        $updateData = ['subscription_id' => 1];

        $response = $this->putJson('/api/account/update-subscription', $updateData);

        $response->assertStatus(404);
        $response->assertJson([
            'message' => 'Account not found',
        ]);
    }

}
