import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;
  showCurrentPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;
  constructor(private fb: FormBuilder, private userService: UserService, private snackBar: MatSnackBar) {
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    });
  }

  changePassword(): void {
    if (this.changePasswordForm.valid) {
      const formData = this.changePasswordForm.value;

      // Ensure that new password and confirm password match
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, change password"
      }).then((result) => {
        if (result.isConfirmed) {
          this.userService.changePassword(formData).subscribe({
            next: (response) => {
              Swal.fire({
                title: "Profile Updated",
                icon: "success"
              });
            },
            error: (error) => {
              Swal.fire({
                title: "Error",
                text: "Error changing password",
                icon: "error"
              });
            }
          });
        }
      });
    } else {
      Swal.fire({
        title: "New password and confirm password do not match",
        icon: "error"
      });
    }
    this.changePasswordForm.reset()
  }


  toggleCurrentPasswordVisibility(): void {
    this.showCurrentPassword = !this.showCurrentPassword;
  }

  toggleNewPasswordVisibility(): void {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

}