<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Receipt extends Model {
    use HasFactory;

    public function SubCategory() {
        return $this->belongsTo(SubCategory::class, 'id', 'sub_category_id');
    }
}
