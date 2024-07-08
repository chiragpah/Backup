import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { LoaderService } from '../../services/loader.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'client';
  isModalOpen: boolean = false;
  isLoading: boolean = false;
  signupModalVisible: boolean = false

  // private subscription: Subscription;

  constructor(private router: Router) {
    // this.subscription = this.loaderService.isLoading().subscribe(loading => {

    console.log(this.isLoading);
    // 


    // });
  }


  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Call your function here
        this.isLoading = true
        setTimeout(() => {
          this.isLoading = false; // Set isLoading to false after 10 seconds
        }, 1000);
      }
      if (this.router.url.includes('confirm')) {
        this.isLoading = false
      }
    });


  }

  openLoginModal() {
    console.log(this.isModalOpen);

    this.isModalOpen = !this.isModalOpen
    this.signupModalVisible = false
  }
  toggleSignupModal() {
    this.signupModalVisible = !this.signupModalVisible
    this.isModalOpen = !this.isModalOpen
  }
  toggleLoginModal() {
    this.signupModalVisible = !this.signupModalVisible;
    this.isModalOpen = !this.isModalOpen;

  }
  closeLoginModal() {
    this.isModalOpen = false
    this.signupModalVisible = false
  }
}

