import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class EditCourseService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }
  cookieValue = this.cookieService.get('access_token');
  private baseUrl = 'http://localhost:3000/api/v1/edit-course';
  editCourse(formData: FormData, id: string): Observable<any> {
    console.log("in service");

    const headers = new HttpHeaders({
      'access_token': this.cookieValue
    });
    const options = { headers: headers };
    return this.http.patch(`${this.baseUrl}/${id}`, formData, options);
  }
}
