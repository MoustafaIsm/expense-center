<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Feedback>
 */
class FeedbackFactory extends Factory {

    public function definition() {
        return [
            'message' => $this->faker->text(100),
            'user_id' => $this->faker->numberBetween(1, 10),
        ];
    }
}
