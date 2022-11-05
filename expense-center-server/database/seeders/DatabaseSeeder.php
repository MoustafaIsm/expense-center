<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Favorite;
use App\Models\Feedback;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            'role' => 'admin',
        ]);
        DB::table('roles')->insert([
            'role' => 'user',
        ]);

        User::factory()->count(10)->create();

        Favorite::factory()->count(10)->create();

        Feedback::factory()->count(20)->create();


        $this->call([
            CategoriesSeeder::Class,
        ]);

    }
}
