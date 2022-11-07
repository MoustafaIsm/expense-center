<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FavoritiesSeeder extends Seeder {

    public function run() {
        $favorites = [
            ['user_id' => 1, 'favorited_id' => 1],
            ['user_id' => 2, 'favorited_id' => 3],
            ['user_id' => 3, 'favorited_id' => 2],
            ['user_id' => 7, 'favorited_id' => 6],
        ];

        foreach ($favorites as $favorite) {
            \DB::table('favorites')->insert($favorite);
        }
    }
}
