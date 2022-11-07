import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const authInfo = { authenticated: localStorage.getItem('token') ? true : false };
    if (!authInfo.authenticated) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
