<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;

Route::group(["middleware" => "auth:api"], function(){

    Route::prefix('admin')->group(function () {
        Route::get('get_users', [AdminController::class, 'getAllUsers']);

        // Categories admin routes
        Route::prefix('categories')->group(function () {
        });

        // Statistics admin routes
        Route::prefix('statistics')->group(function () {
            Route::get('get_most_clicked_users', [AdminController::class, 'getMostClickedUsers']);
            Route::get('get_most_favorited_users', [AdminController::class, 'getMostFavoritedUsers']);
            Route::get('get_incomes', [AdminController::class, 'getIncomes']);
            Route::get('get_outcomes', [AdminController::class, 'getOutcomes']);
            Route::get('get_savings', [AdminController::class, 'getSavings']);
        });

        // Feedback admin routes
        Route::prefix('feedback')->group(function () {
            Route::get('get_feedbacks', [AdminController::class, 'getFeedbacks']);
        });
    });

});

Route::prefix('auth')->group(function () {

    Route::post("login", [AuthController::class, "login"]);
    Route::post("register", [AuthController::class, "register"]);
    Route::get("not_auth", [AuthController::class, 'notAuth'])->name('not-auth');

});
