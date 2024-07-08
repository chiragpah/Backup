

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:3000/api/v1/login';
  private loginStatusChangedSubject: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(email: string, password: string): Observable<any> {
    const body = { email: email, password: password };
    return this.http.post(this.url, body);
  }

  // Method to check login status
  checkLoginStatus(): boolean {
    const accessToken = this.cookieService.get('access_token');
    return accessToken !== '';

  }

  // Method to update login status
  updateLoginStatus(isLoggedIn: boolean) {
    this.loginStatusChangedSubject.next(isLoggedIn); // Notify subscribers about the login status change
  }

  // Observable to subscribe to login status changes
  get loginStatusChanged(): Observable<boolean> {
    return this.loginStatusChangedSubject.asObservable();
  }
}
