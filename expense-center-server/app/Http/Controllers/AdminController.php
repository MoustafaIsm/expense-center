<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class AdminController extends Controller {

    public function getAllUsers() {
        $users = User::all();
        return response()->json([
            'status' => 'success',
            'message' => 'Users got successfully',
            'users' => $users
        ]);
    }

}
