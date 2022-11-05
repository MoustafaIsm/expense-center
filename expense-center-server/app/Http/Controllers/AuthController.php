<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller {

    public function login(Request $request) {

        $credentials = $request->only('email', 'password');

        // Check if user in database
        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        $user->token = $token;
        return response()->json([
                'status' => 'success',
                'user' => $user
            ]);
    }



}
