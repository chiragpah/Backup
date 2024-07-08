import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursePageService {

  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getAllCourseData(): Observable<any> {
    const url = `${this.baseUrl}/api/v1/get-courses`;
    return this.http.get<any>(url);
  }


  getAllCourseDataPage(page: number, itemsPerPage: number): Observable<any> {
    const url = `${this.baseUrl}/api/v1/get-courses`;
    const params = new HttpParams()
      .set('page', page.toString())
      .set('itemsPerPage', itemsPerPage.toString());

    return this.http.get<any>(url, { params });
  }
}