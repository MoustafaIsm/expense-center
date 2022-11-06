<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller {

    public function getfeed() {
        $users = User::limit(20)->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Got users successfully',
            'users' => $users
        ]);
    }

}
