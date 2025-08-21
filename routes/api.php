<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\ChangelogController;
use App\Http\Controllers\Api\EmailSubscriberController;

Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/{id}', [ProjectController::class, 'show']);
Route::get('/changelogs', [ChangelogController::class, 'index']);
Route::post('/email-subscribe', [EmailSubscriberController::class, 'subscribe']);