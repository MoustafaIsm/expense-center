<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Favorite;
use App\Models\Feedback;
use App\Models\Receipt;
use App\Models\SubCategory;

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

    // Receipt user routes
    public function addReceipt(Request $request) {
        $user = Auth::user();
        $receipt = new Receipt;
        $receipt->user_id = $user->id;
        $receipt->title = $request->title;
        $receipt->receipt_url = convertBackToImage($request->receipt_image, $user->id);
        $receipt->type = $request->type;
        $receipt->amount = $request->amount;
        $receipt->sub_category_id = getSubCategoryId($request->sub_category_name);
        $receipt->save();
        return response()->json([
            'status' => 'success',
            'message' => 'Added receipt successfully',
            'receipt' => $receipt
        ]);
    }

    public function getIncomeReceipts() {
        $user = Auth::user();
        $receipts = Receipt::where('user_id', $user->id)
                            ->where('type', 'income')
                            ->with('SubCategory')
                            ->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Got receipts successfully',
            'receipts' => $receipts
        ]);
    }

    public function getOutcomeReceipts() {
        $user = Auth::user();
        $receipts = Receipt::where('user_id', $user->id)
                            ->where('type', 'outcome')
                            ->with('SubCategory')
                            ->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Got receipts successfully',
            'receipts' => $receipts
        ]);
    }

}

function getSubCategoryId($sub_category_name) {
    $sub_category = SubCategory::where('name', $sub_category_name)->first();
    return $sub_category->id;
}

// Convert a base64 string to an image

function convertBackToImage($base64Image, $userId) {
    $dir = $_SERVER['DOCUMENT_ROOT'] . "/receipts/" . $userId;
    if (!file_exists($dir)) {
        mkdir($dir, 0777, true);
    }
    // Explode the original string

    // $base64String is the base64 image without any extra stuff
    $base64String = getBase64String($base64Image);
    // $imageExtention is the original extendtion of the image
    $imageExtention = getImageExtention($base64Image);

    // The path to save the image in
    $imageName = $dir . "/" . uniqid('') . "." . $imageExtention;

    // $data is the Data of the image after decoding
    $data = base64_decode($base64String);

    // Bind the decoded data to an image
    $success = file_put_contents($imageName, $data);

    $url = str_replace("P:\\SEF\\Source Codes\\expense-center\\expense-center-server\\public", "http://127.0.0.1:8000", $imageName);

    return $url;
}

function getBase64String($image) {
    return explode(",", $image)[1];
}

function getImageExtention($image) {
    $extra1 = explode(",", $image)[0];
    $extra2 = explode(";", $extra1)[0];
    return explode("/", $extra2)[1];
}
