<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Favorite;
use App\Models\Feedback;
use App\Models\Receipt;
use App\Models\SubCategory;
use App\Models\Ban;
use App\Models\Location;

class UserController extends Controller {

    public function getfeed() {
        $user = Auth::user();
        // Get banned users
        $bannedUsers = Ban::all();
        // Get banned users IDs
        $bannedUsersIds = [];
        foreach ($bannedUsers as $bannedUser) {
            array_push($bannedUsersIds, $bannedUser->user_id);
        }
        // Get all the users IDS except the current user the banned users and not admins
        $usersIds = User::whereNotIn('id', $bannedUsersIds)
            ->where('role_id', '!=', 1)
            ->where('id', '!=', $user->id)
            ->pluck('id');
        // Select 20 random user IDS
        if (count($usersIds) > 20) {
            $usersIds = $usersIds->random(20);
        }
        // Get users that have the random user IDS
        $users = User::whereIn('id', $usersIds)
                        ->with('History')
                        ->with('Location')
                        ->get();
        // Get user favorited users
        $favoritedUsers = Favorite::where('user_id', $user->id)->get();
        // Get favorited users IDs
        $favoritedUsersIds = [];
        foreach ($favoritedUsers as $favoritedUser) {
            array_push($favoritedUsersIds, $favoritedUser->favorited_id);
        }
        // Add the favorited property to the users array
        foreach ($users as $user) {
            if (in_array($user->id, $favoritedUsersIds)) {
                $user->isFavorited = true;
            } else {
                $user->isFavorited = false;
            }
        }
        // Randomise the order of the users
        $users = $users->shuffle();
        // Return results
        return response()->json([
            'status' => 'success',
            'message' => 'Got users successfully',
            'users' => $users
        ]);
    }

    public function search($username) {
        $users = User::where('username', 'like', '%' . $username . '%')
                    ->where('role_id', '!=', 1)
                    ->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Searched for users successfully',
            'users' => $users
        ]);
    }

    public function getUser($id) {
        $user = Auth::user();
        // Get favorited users
        $favoritedUsers = Favorite::where('user_id', $user->id)->get();
        // Get favorited users IDs
        $favoritedUsersIds = [];
        foreach ($favoritedUsers as $favoritedUser) {
            array_push($favoritedUsersIds, $favoritedUser->favorited_id);
        }
        // Get user
        $result = User::where('id', $id)->with('History')->with('Receipts')->with('Location')->first();
        // Add the favorited property to the user
        if (in_array($result->id, $favoritedUsersIds)) {
            $result->isFavorited = true;
        } else {
            $result->isFavorited = false;
        }
        // Return results
        return response()->json([
            'status' => 'success',
            'message' => 'Got user successfully',
            'user' => $result
        ]);
    }

    public function updateUser(Request $request) {
        $user = Auth::user();
        $user = User::where('id', $user->id)->with('History')->with('Receipts')->with('Location')->first();
        // Check if username is already taken
        $request->validate(['username' => 'unique:users,username,' . $user->id,]);

        // Check for a profile picture is provided
        $resultProfilePicture = $request->profile_picture ? convertBackToImage($request->profile_picture, $user->id, 'profile_pictures'): $user->profile_picture_url;

        // If location is provided add it to the location table first
        $resultLocationId = $user->living_location_id;
        if ($request->latitude && $request->longitude) {
            // Check if the same longitude and latitude already exists
            $location = Location::where('latitude', $request->latitude)->where('longitude', $request->longitude)->first();
            if (!$location) {
                $location = Location::create([
                    'latitude' => $request->latitude,
                    'longitude' => $request->longitude,
                ]);
            }
            $resultLocationId = $location->id;
        }

        // Check if chat enabled is provided
        $resultChat = $request->chat_enabled !== null ? $request->chat_enabled : $user->chat_enabled;

        // Get the data to update
        $data = $request->all();
        // Update the user
        $result = $user->update($data, [
            'chat_enabled' => $resultChat,
        ]);

        // Update the location
        $result1 = $user->update([
            'living_location_id' => $resultLocationId,
            'profile_picture_url' => $resultProfilePicture,
        ]);

        if($result && $result1) {
            return response()->json([
                'status' => 'success',
                'message' => 'Updated user successfully',
                'user' => $user,
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
                                ->limit(20)
                                ->get();
        foreach ($favorites as $favorite) {
            $userDetails = User::where('id', $favorite->favorited_id)
                                ->with('Location')
                                ->with('History')
                                ->with('Receipts')
                                ->first();
            $favorite->userDetails = $userDetails;
            $favorite->userDetails->isFavorited = true;
        }
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
        $receipt->receipt_url = $request->receipt_image !== 'NA' ? convertBackToImage($request->receipt_image, $user->id, 'receipts') : 'NA';
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

    public function getSubCategories() {
        $subCategories = SubCategory::all();
        return response()->json([
            'status' => 'success',
            'message' => 'Got sub categories successfully',
            'subCategories' => $subCategories
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

    $url = str_replace("P:\\SEF\\Source Codes\\expense-center\\expense-center-server\\public", "http://192.168.0.113:8000", $imageName);

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
