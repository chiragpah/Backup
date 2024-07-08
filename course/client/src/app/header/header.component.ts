import { Component, Output, EventEmitter, DoCheck, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../../../services/login.service';
import { ProfileService } from '../../../services/profile.service';
// import { ProfileavatarService } from '../../../services/profileavatar.service';
import { UserService } from '../../../services/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @ViewChild('yourDiv', { static: true }) yourDiv!: ElementRef;
  isloggedin: boolean = false;
  // private subscription:Subscription;
  profileUrl: string = "../../assets/avatar.png";
  constructor(private cookieService: CookieService, private loginService: LoginService, private UserService: UserService, private profileService: ProfileService, private route: Router) { // Inject CookieService
    loginService.checkLoginStatus();
  }

  @Output() openLoginModalEvent = new EventEmitter<void>();

  openLoginModal() {
    this.openLoginModalEvent.emit()
  }
  openSidebar() {
    const divElement: HTMLElement = this.yourDiv.nativeElement;
    divElement.style.display = 'block';
  }
  closeSidebar() {
    const divElement: HTMLElement = this.yourDiv.nativeElement;
    divElement.style.display = 'none';
  }



  activeLink: string | null = '';
  setActiveLink(url: string) {
    console.log(url);
    if (url == '/faq' || url == '/home' || url == 'courses' || url == '/About')
      this.activeLink = url.substring(1);
    else {
      this.activeLink = 'courses'
    }
  }

  ngOnInit() {

    this.isloggedin = this.loginService.checkLoginStatus();


    console.log(this.isloggedin);
    this.setActiveLink(this.route.url)
    if (this.isloggedin) {
      this.UserService.getUser().subscribe((data) => {

        if (data.user.avatar) {
          console.log(data.user.avatar);
          this.profileUrl = data.user.avatar.url;

        }

      })
    }

    // Subscribe to login status changes
    this.loginService.loginStatusChanged.subscribe((isLoggedIn: boolean) => {
      console.log(isLoggedIn);

      this.isloggedin = isLoggedIn;
      console.log(this.isloggedin);
      if (this.isloggedin) {
        this.UserService.getUser().subscribe((data) => {
          console.log(data.user.avatar);
          if (data.user.avatar) {
            this.profileUrl = data.user.avatar.url;
          }
        })
      }

    })
    this.profileService.profileData$.subscribe(data => {
      if (Object.keys(data).length !== 0) {
        console.log(data);

        this.profileUrl = data;
      }
    });


  }
  loadProfile() {
    this.UserService.getUser().subscribe((data) => {
      console.log(data.user.avatar);
      if (data.user.avatar) {
        this.profileUrl = data.user.avatar.url;
      }

    })
  }
}
