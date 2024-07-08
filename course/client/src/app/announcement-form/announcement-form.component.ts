import { Component } from '@angular/core';
import { AnnouncementService } from '../../../services/announcement.service';
import { SocketService } from '../../../services/socket.service';
import { UserNotificationService } from '../../../services/user-notification.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-announcement-form',
  templateUrl: './announcement-form.component.html',
  styleUrls: ['./announcement-form.component.css']
})
export class AnnouncementFormComponent {
  title: string;
  thumbnail: File;
  launchDate: string;
  description: string;
  previewImageUrl: string;
  showPreview: boolean = false;
  minDate: string = new Date().toISOString().split('T')[0];

  constructor(private announcementService: AnnouncementService,
    private socketService: SocketService, private userNotificationService: UserNotificationService) { }

  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      this.thumbnail = event.target.files[0] as File;
    }
  }

  previewAnnouncement(): void {
    if (this.thumbnail) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewImageUrl = e.target.result as string;
      };
      reader.readAsDataURL(this.thumbnail);
    }
    this.showPreview = true;
    this.submitForm();
  }

  submitForm(): void {
    console.log("we are inside the submit");

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to upload this announcement?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, upload it"
    }).then((result) => {
      if (result.isConfirmed) {
        this.announcementService.uploadAnnouncement(this.title, this.thumbnail, this.launchDate, this.description)
          .subscribe(
            response => {
              Swal.fire({
                title: "Announcement Uploaded",
                text: "Form submitted successfully",
                icon: "success"
              });
              console.log('Form submitted successfully:', response);

              console.log("we sent the notification to all the users");
              this.socketService.emit('announcement_notify', { user: response });

              // Create a notification
              const title = "New Announcement";
              const message = "The new course has been launched. Check it out now!";
              this.userNotificationService.createNotification(response.user, title, message)
                .subscribe(
                  () => {
                    Swal.fire({
                      title: "Announcement Created",
                      text: "Announcement Shared with user",
                      icon: "success"
                    });
                    console.log('Notification stored in the database');
                  },
                  error => {
                    Swal.fire({
                      title: "Error",
                      text: "Error storing notification",
                      icon: "error"
                    });
                    console.error('Error storing notification:', error);
                  }
                );
            },
            error => {
              Swal.fire({
                title: "Error",
                text: "Error submitting form",
                icon: "error"
              });
              console.error('Error submitting form:', error);
              // Handle error (e.g., show error message)
            }
          );
      }
    });

  }
}