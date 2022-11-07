<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use Illuminate\Http\Request;

use App\Http\Controllers\AuthController;

class IsAdmin {

    public function handle(Request $request, Closure $next) {
        if (Auth::user()->role_id == 1) {
            return $next($request);
       }

       return redirect()->route('not-auth');
    }
}
