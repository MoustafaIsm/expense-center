<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Favorite;
use App\Models\History;
use App\Models\Feedback;
use App\Models\Category;
use App\Models\SubCategory;

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
            'incomes' => $incomes
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
            'incomes' => $incomes
        ]);
    }

    // Feedback admin routes
    public function getFeedbacks() {
        $feedbacks = Feedback::orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Got feedbacks successfully',
            'feedbacks' => $feedbacks
        ]);
    }

}