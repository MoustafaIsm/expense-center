<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject {
    use HasFactory, Notifiable;

    protected $hidden = ['password'];

    protected $fillable = [
        'username',
        'email',
        'password',
        'gender',
        'date_of_birth',
        'profile_picture_url',
        'relationship_status',
        'nbr_of_children',
        'nbr_of_clicks',
        'education_feild',
        'work_feild',
        'job_title',
        'yearly_salary',
        'income',
        'outcome',
        'chat_enabled',
        'role_id',
        'living_location_id',
    ];

    public function getJWTIdentifier() {
        return $this->getKey();
    }

    public function getJWTCustomClaims() {
        return [];
    }

    public function History() {
        return $this->hasMany(History::class, 'user_id', 'id');
    }

    public function Receipts() {
        return $this->hasMany(Receipt::class, 'user_id', 'id');
    }

    public function Location() {
        return $this->belongsTo(Location::class, 'living_location_id', 'id');
    }

}
