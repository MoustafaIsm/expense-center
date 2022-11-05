<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favorite extends Model {
    use HasFactory;

    public function FavoritedInfo() {
        return $this->hasOne(User::class, 'id', 'favorited_id');
    }

}
