<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Receipt>
 */
class ReceiptFactory extends Factory {

    public function definition() {

        $types = ['income', 'outcome'];

        return [
            'title' => $this->faker->sentence(3),
            'receipt_url' => $this->faker->imageUrl(640, 480, 'receipts', true),
            'amount' => $this->faker->randomFloat(2, 0, 1000),
            'type' => $types[rand(0, 1)],
            'sub_category_id' => rand(1, 69),
            'user_id' => rand(1, 10),
        ];
    }
}
