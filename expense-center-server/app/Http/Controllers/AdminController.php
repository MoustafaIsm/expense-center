<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Favorite;
use App\Models\History;
use App\Models\Feedback;
use App\Models\Category;
use App\Models\SubCategory;
use App\Models\Ban;

use DB;

class AdminController extends Controller {

    // Users admin routes
    public function getBannedUsers($limit, $offset) {
        // Get banned users with limit and offset
        $bannedUsers = Ban::with('user')->limit($limit)->offset($offset)->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Got banned users successfully',
            'users' => $bannedUsers
        ]);
    }

    public function getNotBannedUsers($limit, $offset) {
        $user = Auth::user();
        $bannedUsers = Ban::with('UserInfo')->get();
        $bannedUsersIds = [];
        foreach ($bannedUsers as $bannedUser) {
            array_push($bannedUsersIds, $bannedUser->user_id);
        }
        $notBannedUsers = User::whereNotIn('id', $bannedUsersIds)
                                ->where('id', '!=', $user->id)
                                ->limit($limit)
                                ->offset($offset)
                                ->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Got not banned users successfully',
            'users' => $notBannedUsers
        ]);
    }

    // Categories admin routes
    public function getCategories() {
        $cateories = Category::with('SubCategories')->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Got categories successfully',
            'categories' => $cateories
        ]);
    }

    public function addCategory(Request $request) {
        // Add a new category into the database
        $category = new Category();
        $category->name = $request->name;
        $subCategories = $request->sub_categories;
        $category->save();
        // Add subcategories to the database
        foreach ($subCategories as $item) {
            $subCategory = new SubCategory();
            $subCategory->name = $item['name'];
            $subCategory->parent_category_id = $category->id;
            $subCategory->save();
        }
        return response()->json([
            'status' => 'success',
            'message' => 'Category added successfully',
            'category' => $category
        ]);
    }

    // Statistics admin routes
    public function getMostClickedUsers() {
        $users = User::orderBy('nbr_of_clicks', 'desc')->take(5)->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Got users successfully',
            'users' => $users
        ]);
    }

    public function getMostFavoritedUsers() {
        $users = Favorite::select('favorited_id', DB::raw('count(favorited_id) as total'))
            ->groupBy('favorited_id')
            ->with('FavoritedInfo')
            ->orderBy('total', 'desc')
            ->take(5)
            ->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Got users successfully',
            'users' => $users
        ]);
    }

    public function getIncomes() {
        $incomes = History::select('year', 'month',  DB::raw('sum(income) as total'))
            ->groupBy('year', 'month')
            ->orderBy('year', 'desc')
            ->orderBy('month', 'desc')
            ->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Got incomes successfully',
            'incomes' => $incomes
        ]);
    }

    public function getOutcomes() {
        $incomes = History::select('year', 'month',  DB::raw('sum(outcome) as total'))
            ->groupBy('year', 'month')
            ->orderBy('year', 'desc')
            ->orderBy('month', 'desc')
            ->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Got outcomes successfully',
            'outcomes' => $incomes
        ]);
    }

    public function getSavings() {
        $incomes = History::select('year', 'month',  DB::raw('sum(income)-sum(outcome) as total'))
            ->groupBy('year', 'month')
            ->orderBy('year', 'desc')
            ->orderBy('month', 'desc')
            ->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Got savings successfully',
            'savings' => $incomes
        ]);
    }

    // Feedback admin routes
    public function getFeedbacks($limit, $offset) {
        $feedbacks = Feedback::orderBy('created_at', 'desc')
                    ->with('User')
                    ->limit($limit)
                    ->offset($offset)
                    ->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Got feedbacks successfully',
            'feedbacks' => $feedbacks
        ]);
    }

    // Bans admin routes
    public function addBan(Request $request) {
        $admin = Auth::user();
        $user = User::find($request->user_id);
        $ban = Ban::create([
            'admin_id' => $admin->id,
            'user_id' => $request->user_id,
        ]);
        return response()->json([
            'status' => 'success',
            'message' => 'User banned successfully',
            'user' => $user
        ]);
    }

    public function removeBan(Request $request) {
        $result = Ban::where('user_id', $request->user_id)->delete();
        if($result) {
            return response()->json([
                'status' => 'success',
                'message' => 'User unbanned successfully',
            ]);
        }
        return response()->json([
            'status' => 'error',
            'message' => 'User unbanned failed',
        ]);
    }

    // Reset income and outcome
    public function resetIncomeOutcome(Request $request) {
        $result = DB::select('call reset(?, ?)', [$request->year, $request->month]);
        if($result) {
            return response()->json([
                'status' => 'success',
                'message' => 'Reset successfully',
            ]);
        }
        return response()->json([
            'status' => 'error',
            'message' => 'Reset failed',
        ]);
    }

}
