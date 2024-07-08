import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Your logic to check authentication
    const isLoggedIn = this.cookieService.get('access_token'); // For example, check if user is logged in

    if (isLoggedIn) {
      return true; // User is authenticated, allow navigation
    } else {
      this.router.navigate(['']); // User is not authenticated, redirect to login page
      return false;
    }
  }
}
