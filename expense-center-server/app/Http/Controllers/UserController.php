<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Favorite;
use App\Models\Feedback;

class UserController extends Controller {

    public function getfeed() {
        $users = User::with('History')->limit(20)->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Got users successfully',
            'users' => $users
        ]);
    }

    public function getUser(Request $request) {
        $user = User::where('id', $request->id)->with('History')->with('Receipts')->first();
        return response()->json([
            'status' => 'success',
            'message' => 'Got user successfully',
            'user' => $user
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

    public function favoriteUser(Request $request) {
        $user = Auth::user();
        $favorite = new Favorite;
        $favorite->user_id = $user->id;
        $favorite->favorited_id = $request->favorited_id;
        $favorite->save();
        return response()->json([
            'status' => 'success',
            'message' => 'Favorited user successfully',
            'favorite' => $favorite
        ]);
    }

    public function unfavoriteUser(Request $request) {
        $user = Auth::user();
        $delete = Favorite::where('user_id', $user->id)
                                ->where('favorited_id', $request->favorited_id)
                                ->delete();
        if ($delete) {
            return response()->json([
                'status' => 'success',
                'message' => 'Unfavorited user successfully',
            ]);
        }
        return response()->json([
            'status' => 'error',
            'message' => 'Unfavoriting user failed',
        ]);
    }

    // Feedback user routes
    public function sendFeedback(Request $request) {
        $user = Auth::user();
        $feedback = new Feedback;
        $feedback->user_id = $user->id;
        $feedback->message = $request->message;
        $feedback->save();
        return response()->json([
            'status' => 'success',
            'message' => 'Sent feedback successfully',
            'feedback' => $feedback
        ]);
    }

}
