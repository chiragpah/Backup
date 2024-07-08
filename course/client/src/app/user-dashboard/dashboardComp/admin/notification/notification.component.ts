import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  constructor(private notificationService: NotificationService) { }

  notifications: any;

  ngOnInit() {
    this.fetchNotifications();
  }


  fetchNotifications(): void {
    this.notificationService.getNotifications().subscribe(
      (response) => {
        console.log('Data received from server:');
        console.log(JSON.stringify(response, null, 2));
        this.notifications = response;
        this.notifications = this.notifications.notifications
        console.log('The notifications are:', this.notifications);
      },
      (error) => {
        console.error('Error fetching notifications', error);
      }
    );
  }

  deleteNotification(notificationId: string): void {
    console.log(notificationId);

    this.notificationService.deleteNotification(notificationId).subscribe(
      response => {
        console.log('Notification deleted successfully:', response);
        this.fetchNotifications()
        // Handle any UI update or notification removal logic here
      },
      error => {
        console.error('Error deleting notification:', error);
        // Handle error, display a message, etc.
      }
    );
  }
}