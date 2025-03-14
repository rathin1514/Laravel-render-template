<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('sender_id');
            $table->string('sender_type'); // Werte: 'User' oder 'Trainer'
            
            // Receiver Polymorphe Felder
            $table->unsignedBigInteger('receiver_id');
            $table->string('receiver_type'); // Werte: 'User' oder 'Trainer'
            $table->text('content');
            $table->timestamp('timestamp')->useCurrent();
            $table->timestamps();
            // Indexe für polymorphe Felder
            $table->index(['sender_id', 'sender_type']);
            $table->index(['receiver_id', 'receiver_type']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('messages');
    }

};
