<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::group(["middleware" => "auth:api"], function(){

});

Route::prefix('auth')->group(function () {

    Route::post("/login", [AuthController::class, "login"]);
    Route::post("/register", [AuthController::class, "register"]);
    Route::get("/not_auth", [AuthController::class, 'notAuth'])->name('not-auth');

});
