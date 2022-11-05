<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Favorite>
 */
class FavoriteFactory extends Factory {

    public function definition() {
        return [
            'user_id' => $this->faker->numberBetween(1, 10),
            'favorited_id' => $this->faker->numberBetween(1, 10),
        ];
    }
}
