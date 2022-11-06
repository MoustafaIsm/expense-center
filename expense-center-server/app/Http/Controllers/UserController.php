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
        $users = User::with('History')->with('Location')->limit(20)->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Got users successfully',
            'users' => $users
        ]);
    }

    public function getUser(Request $request) {
        $user = User::where('id', $request->id)->with('History')->with('Receipts')->with('Location')->first();
        return response()->json([
            'status' => 'success',
            'message' => 'Got user successfully',
            'user' => $user
        ]);
    }

    public function updateUser(Request $request) {
        $user = Auth::user();
        $user = User::where('id', $user->id)->first();
        $user->username = $request->username ? $request->username : $user->username;
        $user->email = $request->email ? $request->email : $user->email;
        $user->profile_picture_url = $request->profile_picture ? convertBackToImage($request->profile_picture, $user->id, 'profile_pictures'): $user->profile_picture_url;
        $user->relationship_status = $request->relationship_status ? $request->relationship_status : $user->relationship_status;
        $user->nbr_of_children = $request->nbr_of_children ? $request->nbr_of_childern : $user->nbr_of_children;
        $user->education_feild = $request->education_feild ? $request->education_feild : $user->education_feild;
        $user->work_feild = $request->work_feild ? $request->work_feild : $user->work_feild;
        $user->job_title = $request->job_title ? $request->job_title : $user->job_title;
        $user->yearly_salary = $request->yearly_salary ? $request->yearly_salary : $user->yearly_salary;
        $user->chat_enabled = $request->chat_enabled ? $request->chat_enabled : $user->chat_enabled;

        if ($request->latitude && $request->longitude) {
            $location = Location::create([
                'latitute' => $request->latitute,
                'longitute' => $request->longitute,
            ]);
            $user->living_location_id = $location->id;
        }
        $result = $user->save();

        if($result) {
            return response()->json([
                'status' => 'success',
                'message' => 'Updated user successfully',
                'user' => $user
            ]);
        }
        return response()->json([
            'status' => 'error',
            'message' => 'Failed to update user'
        ]);
    }

    public function increaseUserClicks(Request $request) {
        $user = User::where('id', $request->id)->first();
        $user->nbr_of_clicks = $user->nbr_of_clicks + 1;
        $result = $user->save();

        if($result) {
            return response()->json([
                'status' => 'success',
                'message' => 'Increased user clicks successfully',
            ]);
        }
        return response()->json([
            'status' => 'error',
            'message' => 'Failed to increase user clicks'
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
        $receipt->receipt_url = convertBackToImage($request->receipt_image, $user->id, 'receipts');
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

function convertBackToImage($base64Image, $userId, $type) {
    $dir = $_SERVER['DOCUMENT_ROOT'] . "/" . $type . "/" . $userId;
    if (!file_exists($dir)) {
        mkdir($dir, 0777, true);
    }
    // Explode the original string

    // $base64String is the base64 image without any extra stuff
    $base64String = getBase64String($base64Image);
    // $imageExtention is the original extendtion of the image
    $imageExtention = getImageExtention($base64Image);

    // The path to save the image in
    if ($type == 'receipts') {
        $imageName = $dir . "/" . uniqid('') . "." . $imageExtention;
    } else {
        $imageName = $dir . "/" . $userId . "." . $imageExtention;
    }

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
