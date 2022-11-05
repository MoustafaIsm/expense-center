<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

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

    public function register(Request $request) {

        try {
            // Add user to the database
            $user = User::create([
                'username' => 'Someone' . rand(1, 100000),
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'gender' => $request->gender,
                'date_of_birth' => $request->date_of_birth,
                'role_id' => 2
            ]);
            // Login user
            $token = Auth::login($user);
            $user->token = $token;
            return response()->json([
                'status' => 'success',
                'message' => 'User created successfully',
                'user' => $user
            ]);
        } catch (\Illuminate\Database\QueryException $exception) {
            return response()->json([
                'status' => 'error',
                'message' => $exception->errorInfo[2],
            ], 400);
        }
    }

    public function notAuth() {
        return response()->json([
            'status' => 'error',
            'message' => "You are unauthorized.",
        ], 401);
    }

}
