<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubCategory extends Model {

    use HasFactory;

    public function Receipts() {
        return $this->hasMany(Receipt::class, 'sub_category_id', 'id');
    }

}
