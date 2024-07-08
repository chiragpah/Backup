import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/v1'; // Change this to your actual API URL
  private profileImageUrlSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  constructor(private http: HttpClient, private cookieService: CookieService) { }
  cookieValue = this.cookieService.get('access_token');
  // Method to fetch user data
  getUser(): Observable<any> {
    console.log('we are called the get user in frontend');
    const cookieValue = this.cookieService.get('access_token');

    console.log('the cookie value is ' + cookieValue);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      access_token: `${cookieValue}`,
    });
    return this.http.get(`${this.apiUrl}/me`, { headers });
  }

  updateUser(data: any): Observable<any> {
    const cookieValue = this.cookieService.get('access_token');

    console.log('the cookie value is inside update user is ' + cookieValue);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      access_token: `${cookieValue}`,
    });
    return this.http.put(`${this.apiUrl}/update-user-info`, data, { headers });
  }

  changePassword(data: any): Observable<any> {
    const cookieValue = this.cookieService.get('access_token');

    console.log('the cookie value is ' + cookieValue);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      access_token: `${cookieValue}`,
    });
    console.log(
      'form data is ' + data.currentPassword + ' ' + data.newPassword
    );
    return this.http.put(`${this.apiUrl}/update-user-password`, data, {
      headers,
    });
  }
  logOut(): Observable<any> {
    console.log('inside log out');

    const cookieValue = this.cookieService.get('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      access_token: `${cookieValue}`,
    });
    this.cookieService.deleteAll();
    this.cookieService.deleteAll();
    return this.http.get('${this.apiUrl}/logout', { headers });
  }
  updateProfile(formData: FormData): Observable<any> {
    const cookieValue = this.cookieService.get('access_token');
    const headers = new HttpHeaders({

      access_token: `${cookieValue}`
    });
    console.log(formData);

    return this.http.put('http://localhost:3000/api/v1/update-user-avatar', formData, { headers }).pipe(
      catchError((error: any) => {
        console.error('Error updating profile:', error);
        throw error; // Rethrow the error to propagate it to the caller
      }),
      map((response: any) => {
        if (response && response.user && response.user.avatar && response.user.avatar.url) {
          this.profileImageUrlSubject.next(response.user.avatar.url);
        }
        return response;
      })
    );
  }
  getProfileImageUrl(): Observable<string | null> {
    return this.profileImageUrlSubject.asObservable();
  }

  getUserCourses() {
    const cookieValue = this.cookieService.get('access_token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      access_token: `${cookieValue}`,
    });
    return this.http.get(`${this.apiUrl}/user-course`, { headers });
  }
}
