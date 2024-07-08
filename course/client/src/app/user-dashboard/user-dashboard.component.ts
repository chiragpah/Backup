import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { LoginService } from '../../../services/login.service';
import { ProfileService } from '../../../services/profile.service';
import {

  faUser,

} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { BehaviorSubject } from 'rxjs';
import { SocketService } from '../../../services/socket.service';
import { UserNotificationService } from '../../../services/user-notification.service';
import { AnnouncementService } from '../../../services/announcement.service';

@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit {

  faUser = faUser;
  user: any;
  newNotificationsCount = new BehaviorSubject<number>(0);
  // faPadlock = faPadlock;
  announcementCount = new BehaviorSubject<number>(0);
  count: number = 0;
  profileUrl: string = "../../assets/avatar.png";


  constructor(private userService: UserService, private router: Router, private loginService: LoginService, private socketService: SocketService, private userNotificationService: UserNotificationService, private annoucementService: AnnouncementService, private cdr: ChangeDetectorRef, private profileService: ProfileService) { }
  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
      this.user = data.user;
      console.log(this.user);
      // if (this.user.data.url) {
      this.profileUrl = this.user.avatar.url
      // }
      console.log(data.user.role);

      this.checkAdmin(data.user.role);

    })
    this.profileService.profileData$.subscribe(data => {
      if (Object.keys(data).length !== 0) {
        console.log(data);

        this.profileUrl = data;
      }
    });
    this.userNotificationService.getAllNotifications().subscribe((response: any) => {
      const notifications = response.notifications;
      this.newNotificationsCount.next(notifications.length);

      console.log("Total notification count is: " + this.newNotificationsCount.getValue());
    });
    this.annoucementService.getAllAnnouncements().subscribe((response: any) => {
      const annoucement = response;
      this.announcementCount.next(annoucement.length);
      this.count = annoucement.length;
      this.cdr.detectChanges();

      console.log("Total notification count is: " + this.announcementCount.getValue());
      this.socketService.listen('newannoucement_notify').subscribe((data) => {
        console.log("we got the asdjfsalfjlkfjflsajfs")
        this.newNotificationsCount.next(this.newNotificationsCount.getValue() + 1);
        this.announcementCount.next(this.announcementCount.getValue() + 1);


      });
    });

  }
  checkAdmin(role: string) {
    if (role == 'admin')
      this.showAdmin = true;

  }
  currentComponent: number = 1;
  showAdmin: boolean = false;

  showComponent(componentNumber: number): void {
    this.currentComponent = componentNumber;
  }
  logout() {
    console.log("clicked logout");
    this.userService.logOut();
    this.loginService.updateLoginStatus(false);
    // Assuming '/login' is the route to your login page
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logut Successfully",
      showConfirmButton: false,
      timer: 1500
    });
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1500);
  }
  gotoAdminPage() {
    this.router.navigate(['/AdminDashboard']);
  }
}
