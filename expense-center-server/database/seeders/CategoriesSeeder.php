<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder {

    public function run() {

        $categories = [
            ['name' => 'Housing'],
            ['name' => 'Transportation'],
            ['name' => 'Food'],
            ['name' => 'Utilities'],
            ['name' => 'Clothing'],
            ['name' => 'Medical/Healthcare'],
            ['name' => 'Insurance'],
            ['name' => 'Household Items/Supplies'],
            ['name' => 'Personal'],
            ['name' => 'Debt'],
            ['name' => 'Retirement'],
            ['name' => 'Education'],
            ['name' => 'Gifts'],
            ['name' => 'Entertainment'],
            ['name' => 'Other']
        ];

        $subCategories = [
            ['name' => 'Mortgage or Rent', 'parent_category_id' => 1],
            ['name' => 'Property Taxes', 'parent_category_id' => 1],
            ['name' => 'Household Repairs', 'parent_category_id' => 1],
            ['name' => 'HOA Fees', 'parent_category_id' => 1],

            ['name' => 'Car Payment', 'parent_category_id' => 2],
            ['name' => 'Car Warranty', 'parent_category_id' => 2],
            ['name' => 'Gas', 'parent_category_id' => 2],
            ['name' => 'Tires', 'parent_category_id' => 2],
            ['name' => 'Maintenance and Oil Changes', 'parent_category_id' => 2],
            ['name' => 'Parking Fees', 'parent_category_id' => 2],
            ['name' => 'Repairs', 'parent_category_id' => 2],
            ['name' => 'Registration and DMV Fees', 'parent_category_id' => 2],

            ['name' => 'Groceries', 'parent_category_id' => 3],
            ['name' => 'Restaurants', 'parent_category_id' => 3],
            ['name' => 'Pet Food', 'parent_category_id' => 3],

            ['name' => 'Electricity', 'parent_category_id' => 4],
            ['name' => 'Water', 'parent_category_id' => 4],
            ['name' => 'Garbage', 'parent_category_id' => 4],
            ['name' => 'Phones', 'parent_category_id' => 4],
            ['name' => 'Cable', 'parent_category_id' => 4],
            ['name' => 'Internet', 'parent_category_id' => 4],

            ['name' => 'Adults\' Clothing', 'parent_category_id' => 5],
            ['name' => 'Adults\' Shoes', 'parent_category_id' => 5],
            ['name' => 'Children\'s Clothing', 'parent_category_id' => 5],
            ['name' => 'Children\'s Shoes', 'parent_category_id' => 5],

            ['name' => 'Primary Care', 'parent_category_id' => 6],
            ['name' => 'Dental Care', 'parent_category_id' => 6],
            ['name' => 'Specialty Care (dermatologists, orthodontics, optometrists, etc.)', 'parent_category_id' => 6],
            ['name' => 'Urgent Care', 'parent_category_id' => 6],
            ['name' => 'Medications', 'parent_category_id' => 6],
            ['name' => 'Medical Devices', 'parent_category_id' => 6],

            ['name' => 'Health Insurance', 'parent_category_id' => 7],
            ['name' => 'Homeowner\'s or Renter\'s Insurance', 'parent_category_id' => 7],
            ['name' => 'Home Warranty or Protection Plan', 'parent_category_id' => 7],
            ['name' => 'Auto Insurance', 'parent_category_id' => 7],
            ['name' => 'Life Insurance', 'parent_category_id' => 7],
            ['name' => 'Disability Insurance', 'parent_category_id' => 7],

            ['name' => 'Toiletries', 'parent_category_id' => 8],
            ['name' => 'Laundry Detergent', 'parent_category_id' => 8],
            ['name' => 'Dishwasher Detergent', 'parent_category_id' => 8],
            ['name' => 'Cleaning Supplies', 'parent_category_id' => 8],
            ['name' => 'Tools', 'parent_category_id' => 8],

            ['name' => 'Gym Memberships', 'parent_category_id' => 9],
            ['name' => 'Haircuts', 'parent_category_id' => 9],
            ['name' => 'Salon Services', 'parent_category_id' => 9],
            ['name' => 'Cosmetics', 'parent_category_id' => 9],
            ['name' => 'Babysitter', 'parent_category_id' => 9],
            ['name' => 'Subscriptions', 'parent_category_id' => 9],

            ['name' => 'Personal Loans', 'parent_category_id' => 10],
            ['name' => 'Student Loans', 'parent_category_id' => 10],
            ['name' => 'Credit Cards', 'parent_category_id' => 10],

            ['name' => 'Financial Planning', 'parent_category_id' => 11],
            ['name' => 'Investing', 'parent_category_id' => 11],

            ['name' => 'Children\'s College', 'parent_category_id' => 12],
            ['name' => 'Your College', 'parent_category_id' => 12],
            ['name' => 'School Supplies', 'parent_category_id' => 12],
            ['name' => 'Books', 'parent_category_id' => 12],

            ['name' => 'Birthday Gifts', 'parent_category_id' => 13],
            ['name' => 'Anniversary Gifts', 'parent_category_id' => 13],
            ['name' => 'Wedding Gifts', 'parent_category_id' => 13],
            ['name' => 'Christmas Gifts', 'parent_category_id' => 13],
            ['name' => 'Special Occasion Gifts', 'parent_category_id' => 13],
            ['name' => 'Charities Gifts', 'parent_category_id' => 13],

            ['name' => 'Alcohol and/or Bars', 'parent_category_id' => 14],
            ['name' => 'Games', 'parent_category_id' => 14],
            ['name' => 'Movies', 'parent_category_id' => 14],
            ['name' => 'Concerts', 'parent_category_id' => 14],
            ['name' => 'Vacations', 'parent_category_id' => 14],
            ['name' => 'Subscriptions ', 'parent_category_id' => 14]
        ];

        foreach ($categories as $category) {
            \App\Models\Category::create($category);
        }

        foreach ($subCategories as $subCategory) {
            \App\Models\SubCategory::create($subCategory);
        }

    }
}
