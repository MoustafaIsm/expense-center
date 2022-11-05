<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory {

    public function definition() {
        return [
            'username' => $this->faker->userName,
            'email' => $this->faker->unique()->safeEmail,
            'password' => '$2y$10$8esY9mXLjiyokMqRL7AC7ukP0pRMk8iNrKNRwZ6lGeM37wI3kfi/m',
            'date_of_birth' => $this->faker->date(),
            'gender' => 'male',
            'nbr_of_children' => $this->faker->numberBetween(0, 5),
            'nbr_of_clicks' => $this->faker->numberBetween(0, 100),
            'yearly_salary' => $this->faker->numberBetween(10000, 100000),
            'income' => $this->faker->numberBetween(10000, 100000),
            'outcome' => $this->faker->numberBetween(10000, 100000),
            'role_id' => $this->faker->numberBetween(1, 2),

        ];
    }

}
