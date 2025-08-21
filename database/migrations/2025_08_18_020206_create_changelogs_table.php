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
        Schema::create('changelogs', function (Blueprint $table) {
            $table->id();
            $table->string('version');
            $table->string('title');
            $table->text('description');
            $table->json('features')->nullable(); // Array of new features
            $table->json('improvements')->nullable(); // Array of improvements
            $table->json('fixes')->nullable(); // Array of bug fixes
            $table->date('release_date');
            $table->boolean('is_major')->default(false);
            $table->boolean('is_published')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('changelogs');
    }
};