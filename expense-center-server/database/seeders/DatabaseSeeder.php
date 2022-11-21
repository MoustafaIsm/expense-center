<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Feedback;
use App\Models\Receipt;

class DatabaseSeeder extends Seeder {

    public function run() {

        DB::table('roles')->insert([
            'role' => 'admin',
        ]);
        DB::table('roles')->insert([
            'role' => 'user',
        ]);

        User::factory()->count(10)->create();

        Feedback::factory()->count(20)->create();

        $this->call([
            CategoriesSeeder::Class,
            FavoritiesSeeder::Class,
        ]);

        Receipt::factory()->count(100)->create();

    }
}
