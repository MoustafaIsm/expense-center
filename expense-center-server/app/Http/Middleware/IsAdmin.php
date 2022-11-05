<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use Illuminate\Http\Request;

class IsAdmin {

    public function handle(Request $request, Closure $next) {
        if (Auth::user() &&  Auth::user()->role_id == 1) {
            return $next($request);
       }

       return redirect('not-auth');
    }
}
