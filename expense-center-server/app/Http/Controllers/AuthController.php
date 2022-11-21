<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Ban;

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
        // Check if user is banned
        $ban = Ban::where('user_id', $user->id)->first();
        if ($ban) {
            return response()->json([
                'status' => 'error',
                'message' => 'You are banned',
            ], 401);
        }
        $user->token = $token;
        return response()->json([
                'status' => 'success',
                'user' => $user
        ]);
    }

    public function register(Request $request) {

        try {
            // Generate a random username and check if it's unique repeat until it is
            $username = 'Someone' . rand(100, 9999999);
            $user = User::where('username', $username)->first();
            while ($user) {
                $username = 'Someone' . rand(100, 9999999);
                $user = User::where('username', $username)->first();
            }
            // Add user to the database
            $user = User::create([
                'username' => $username,
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
