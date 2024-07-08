import { Component, OnInit, Input } from '@angular/core';
import { UserNotificationService } from '../../../services/user-notification.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-notifications-user',
  templateUrl: './notifications-user.component.html',
  styleUrls: ['./notifications-user.component.css']
})
export class NotificationsUserComponent implements OnInit {
  constructor(private notificationService: UserNotificationService) { }

  notifications: any;
  @Input() newNotificationsCount$: Subject<number>;
  newNotificationsCount: number = 0;

  ngOnInit(): void {
    this.fetchNotifications();
  }

  fetchNotifications(): void {
    this.notificationService.getAllNotifications().subscribe(
      (response) => {
        console.log('Data received from server:');
        console.log(JSON.stringify(response, null, 2));
        this.notifications = response.notifications; // Assigning the notifications array
        console.log("Notifications:", this.notifications);

        // Update newNotificationsCount based on notifications length
        this.newNotificationsCount = this.notifications.length;
        this.emitNewNotificationsCount();
      },
      (error) => {
        console.error('Error fetching notifications', error);
      }
    );
  }

  deleteNotification(notificationId: string): void {
    this.notificationService.deleteNotification(notificationId).subscribe(
      (response) => {
        console.log('Notification deleted:', response);
        // Remove the deleted notification from the array
        this.notifications = this.notifications.filter(notification => notification._id !== notificationId);

        // Update newNotificationsCount after deletion
        this.newNotificationsCount = this.notifications.length;
        this.emitNewNotificationsCount();
      },
      (error) => {
        console.error('Error deleting notification', error);
      }
    );
  }

  emitNewNotificationsCount(): void {
    this.newNotificationsCount$.next(this.newNotificationsCount);
  }
}