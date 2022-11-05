<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

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


    }
}
