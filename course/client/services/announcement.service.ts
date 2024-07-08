import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private baseUrl = 'http://localhost:3000/api/v1'; // Update with your backend API URL

  constructor(private http: HttpClient) { }

  uploadAnnouncement(title: string, thumbnail: File, launchDate: string, description: string) {
    console.log("we are inside the upload annoucement")
    const formData = new FormData();
    formData.append('title', title)
    formData.append('thumbnail', thumbnail);
    formData.append('launchDate', launchDate);
    formData.append('description', description);

    return this.http.post<any>(`${this.baseUrl}/upload`, formData);
  }
  getAllAnnouncements(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/getallnotifications`);
  }

  deleteAnnouncement(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/deleteannouncement/${id}`);
  }
}