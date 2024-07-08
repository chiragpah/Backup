import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Validation } from './validation';
import { Router } from '@angular/router';
import { RegistrationService } from '../../../services/registration.service';
import { response } from 'express';
import { error } from 'console';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: '../login/login.component.css'
})
export class RegistrationComponent {
  registrationform!: FormGroup;
  @ViewChild('RegistrationModal') RegistrationModal!: ElementRef;
  validation: Validation = new Validation();
  @Input() showModal: boolean = false;
  @Output() switchToLoginClicked = new EventEmitter<void>();
  @Output() closeLogin = new EventEmitter<void>();
  failure: boolean = false;
  failureMessage: string = '';
  errorhandler: any;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private registrationService: RegistrationService,
  ) { }
  switchToLogin() {
    this.switchToLoginClicked.emit();
  }
  get f() {
    return this.registrationform.controls;
  }


  ngOnInit(): void {
    this.registrationform = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), this.validation.nameValidator]],

      email: ['', [Validators.required, this.validation.emailValidator]],

      password: ['', [Validators.required, Validators.minLength(8), this.validation.passwordValidator]],


    });
  }
  onSubmit() {
    if (this.registrationform.invalid) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please Enter Valid Details",
        showConfirmButton: false,
        timer: 1500
      });
    }
    else {
      this.registrationService.register(this.f['name'].value, this.f['email'].value, this.f['password'].value).subscribe(response => {
        console.log(response.activationToken);
        Swal.fire({
          title: "OTP",
          text: "OTP Has been Sent to your Registered MailId",
          icon: "info"
        }).then((result) => {
          if (result.isConfirmed) {
            // User clicked "OK", proceed with navigation
            this.route.navigate(['/otp', { access_token: response.activationToken }]);
          } else {
            // Handle cancel or close action here
            console.log("User canceled or closed the dialog");
          }
        });
        console.log(this.registrationform.value); // Submit the form data
        this.closeModal()
        this.closeLogin.emit();

      },
        (error) => {
          console.error("Registration Error:", error);
          let errorMessage = "Email already Exist";
          if (error.status === 401) {
            errorMessage = "Unauthorized access. Please check your credentials.";
          } else if (error.status === 500) {
            errorMessage = "Internal server error. Please try again later.";
          }
          Swal.fire({
            position: "center",
            icon: "error",
            title: errorMessage,
            showConfirmButton: false,
            timer: 1500
          });
        })
    }
  }

  closeModal() {
    const modal = this.RegistrationModal.nativeElement as HTMLElement;
    modal.style.display = 'none';
  }

}
