<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Favorite;

class UserController extends Controller {

    public function getfeed() {
        $users = User::limit(20)->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Got users successfully',
            'users' => $users
        ]);
    }

    // Favorite user routes
    public function getFavorites() {
        $user = Auth::user();
        $favorites = Favorite::where('user_id', $user->id)
                                ->with('FavoritedInfo')
                                ->limit(20)
                                ->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Got favorites successfully',
            'favorites' => $favorites
        ]);
    }

}
