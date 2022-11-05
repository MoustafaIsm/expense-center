<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Favorite;

use DB;

class AdminController extends Controller {

    public function getAllUsers() {
        $users = User::all();
        return response()->json([
            'status' => 'success',
            'message' => 'Got users successfully',
            'users' => $users
        ]);
    }

    public function getMostClickedUsers() {
        $users = User::orderBy('nbr_of_clicks', 'desc')->take(5)->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Got users successfully',
            'users' => $users
        ]);
    }

}
