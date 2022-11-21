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
            ['name' => 'Mortgage or rent', 'parent_category_id' => 1],
            ['name' => 'Property taxes', 'parent_category_id' => 1],
            ['name' => 'Household repairs', 'parent_category_id' => 1],
            ['name' => 'HOA fees', 'parent_category_id' => 1],

            ['name' => 'Car payment', 'parent_category_id' => 2],
            ['name' => 'Car warranty', 'parent_category_id' => 2],
            ['name' => 'Gas', 'parent_category_id' => 2],
            ['name' => 'Tires', 'parent_category_id' => 2],
            ['name' => 'Maintenance and oil changes', 'parent_category_id' => 2],
            ['name' => 'Parking fees', 'parent_category_id' => 2],
            ['name' => 'Repairs', 'parent_category_id' => 2],
            ['name' => 'Registration and DMV Fees', 'parent_category_id' => 2],

            ['name' => 'Groceries', 'parent_category_id' => 3],
            ['name' => 'Restaurants', 'parent_category_id' => 3],
            ['name' => 'Pet food', 'parent_category_id' => 3],

            ['name' => 'Electricity', 'parent_category_id' => 4],
            ['name' => 'Water', 'parent_category_id' => 4],
            ['name' => 'Garbage', 'parent_category_id' => 4],
            ['name' => 'Phones', 'parent_category_id' => 4],
            ['name' => 'Cable', 'parent_category_id' => 4],
            ['name' => 'Internet', 'parent_category_id' => 4],

            ['name' => 'Adults\' clothing', 'parent_category_id' => 5],
            ['name' => 'Adults\' shoes', 'parent_category_id' => 5],
            ['name' => 'Children\'s clothing', 'parent_category_id' => 5],
            ['name' => 'Children\'s shoes', 'parent_category_id' => 5],

            ['name' => 'Primary care', 'parent_category_id' => 6],
            ['name' => 'Dental care', 'parent_category_id' => 6],
            ['name' => 'Specialty care (dermatologists, orthodontics, optometrists, etc.)', 'parent_category_id' => 6],
            ['name' => 'Urgent care', 'parent_category_id' => 6],
            ['name' => 'Medications', 'parent_category_id' => 6],
            ['name' => 'Medical devices', 'parent_category_id' => 6],

            ['name' => 'Health insurance', 'parent_category_id' => 7],
            ['name' => 'Homeowner\'s or renter\'s insurance', 'parent_category_id' => 7],
            ['name' => 'Home warranty or protection plan', 'parent_category_id' => 7],
            ['name' => 'Auto insurance', 'parent_category_id' => 7],
            ['name' => 'Life insurance', 'parent_category_id' => 7],
            ['name' => 'Disability insurance', 'parent_category_id' => 7],

            ['name' => 'Toiletries', 'parent_category_id' => 8],
            ['name' => 'Laundry detergent', 'parent_category_id' => 8],
            ['name' => 'Dishwasher detergent', 'parent_category_id' => 8],
            ['name' => 'Cleaning supplies', 'parent_category_id' => 8],
            ['name' => 'Tools', 'parent_category_id' => 8],

            ['name' => 'Gym memberships', 'parent_category_id' => 9],
            ['name' => 'Haircuts', 'parent_category_id' => 9],
            ['name' => 'Salon services', 'parent_category_id' => 9],
            ['name' => 'Cosmetics', 'parent_category_id' => 9],
            ['name' => 'Babysitter', 'parent_category_id' => 9],
            ['name' => 'Subscriptions', 'parent_category_id' => 9],

            ['name' => 'Personal loans', 'parent_category_id' => 10],
            ['name' => 'Student loans', 'parent_category_id' => 10],
            ['name' => 'Credit cards', 'parent_category_id' => 10],

            ['name' => 'Financial planning', 'parent_category_id' => 11],
            ['name' => 'Investing', 'parent_category_id' => 11],

            ['name' => 'Children\'s college', 'parent_category_id' => 12],
            ['name' => 'Your college', 'parent_category_id' => 12],
            ['name' => 'School supplies', 'parent_category_id' => 12],
            ['name' => 'Books', 'parent_category_id' => 12],

            ['name' => 'Birthday gifts', 'parent_category_id' => 13],
            ['name' => 'Anniversary gifts', 'parent_category_id' => 13],
            ['name' => 'Wedding gifts', 'parent_category_id' => 13],
            ['name' => 'Christmas gifts', 'parent_category_id' => 13],
            ['name' => 'Special occasion gifts', 'parent_category_id' => 13],
            ['name' => 'Charities gifts', 'parent_category_id' => 13],

            ['name' => 'Alcohol and/or bars', 'parent_category_id' => 14],
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
