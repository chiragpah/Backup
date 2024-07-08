import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserNotificationService {

  private baseUrl = 'http://localhost:3000/api/v1'; // Update with your backend API URL

  constructor(private http: HttpClient) { }

  createNotification(user: any, title: string, message: string) {
    return this.http.post<any>(`${this.baseUrl}/user-notifications`, { user, title, message });

  }
  getAllNotifications(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/user-notifications`);
  }
  deleteNotification(notificationId: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/user-notifications/${notificationId}`);
  }
}



