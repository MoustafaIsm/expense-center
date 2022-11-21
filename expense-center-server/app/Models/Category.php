<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model {
    use HasFactory;

    public function SubCategories() {
        $subCategories = $this->hasMany(SubCategory::class, 'parent_category_id', 'id')->with('Receipts');
        return $subCategories;
    }

}
