<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;

Route::group(["middleware" => "auth:api"], function(){

    Route::prefix('admin')->group(function () {

        // Users admin routes
        Route::prefix('users')->group(function () {
            Route::get('get_banned_users', [AdminController::class, 'getBannedUsers']);
            Route::get('get_not_banned_users', [AdminController::class, 'getNotBannedUsers']);
        });

        // Categories admin routes
        Route::prefix('categories')->group(function () {
            Route::get('get_categories', [AdminController::class, 'getCategories']);
            Route::post('add_category', [AdminController::class, 'addCategory']);
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

        // Bans admin routes
        Route::prefix('bans')->group(function () {
            Route::post('add_ban', [AdminController::class, 'addBan']);
            Route::delete('remove_ban', [AdminController::class, 'removeBan']);
        });

    });

    Route::prefix('user')->group(function () {
        Route::get('get_feed', [UserController::class, 'getFeed']);

        Route::post('get_user', [UserController::class, 'getUser']);
        Route::put('update_user', [UserController::class, 'updateUser']);
        Route::put('increase_user_clicks', [UserController::class, 'increaseUserClicks']);

        // Favorite user routes
        Route::prefix('favorite')->group(function () {
            Route::get('get_favorites', [UserController::class, 'getFavorites']);
            Route::post('favorite_user', [UserController::class, 'favoriteUser']);
            Route::delete('unfavorite_user', [UserController::class, 'unfavoriteUser']);
        });

        // Feedback user routes
        Route::prefix('feedback')->group(function () {
            Route::post('send_feedback', [UserController::class, 'sendFeedback']);
        });

        // Receipt user routes
        Route::prefix('receipt')->group(function () {
            Route::post('add_receipt', [UserController::class, 'addReceipt']);
            Route::get('get_income_receipts', [UserController::class, 'getIncomeReceipts']);
            Route::get('get_outcome_receipts', [UserController::class, 'getOutcomeReceipts']);
        });

    });

});

Route::prefix('auth')->group(function () {

    Route::post("login", [AuthController::class, "login"]);
    Route::post("register", [AuthController::class, "register"]);
    Route::get("not_auth", [AuthController::class, 'notAuth'])->name('not-auth');

});
