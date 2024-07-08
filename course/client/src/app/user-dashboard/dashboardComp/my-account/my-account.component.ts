import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../../../../services/user.service';
import { ProfileService } from '../../../../../services/profile.service';
import Swal from 'sweetalert2';
// import{ProfileavatarService} from '../../../../../services/profileavatar.service'
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.css'
})
export class MyaccountComponent implements OnInit {
  formData: FormData = new FormData();
  profileUrl: string = '../../../../assets/avatar.png';

  selectedAvatar: any;
  profileForm: FormGroup;
  // Assuming you have a method to handle file inputs
  profilePhoto: File | null = null;

  constructor(private fb: FormBuilder, private userService: UserService, private profile: ProfileService) {
    this.profileForm = this.fb.group({
      fullName: [''],
      email: [''],
      avatar: ['']
    });
  }

  ngOnInit(): void {
    this.getUserData();


  }

  getUserData(): void {
    this.userService.getUser().subscribe({
      next: (data) => {
        console.log("value are patched", data)
        this.profileForm.patchValue({
          fullName: data.user.name,
          email: data.user.email,
        });
        this.profileUrl = data.user.avatar.url;
        // this.profileSet.setData(this.profileUrl)
      },
      error: (error) => console.error(error)
    });

  }

  updateProfile(): void {
    const formData = {
      name: this.profileForm.get('fullName')?.value,//this.profileForm.get('fullName').value,

      // Include other form fields as needed
    };
    console.log("calling the service");

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update user"
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.updateUser(formData).subscribe({
          next: (response) => {
            Swal.fire({
              title: "User Updated",
              text: "User updated successfully",
              icon: "success"
            });
            console.log('User updated successfully', response);
            // Update the UI or perform additional actions if needed
          },
          error: (error) => {
            Swal.fire({
              title: "Error",
              text: "Error updating user",
              icon: "error"
            });
            console.error('Error updating user', error);
          }
        });
      }
    });
  }
  previewProfilePhoto(event: any) {

    const fileInput = event.target;
    this.selectedAvatar = fileInput.files[0];
    console.log(this.selectedAvatar);
    this.formData.append("avatar", this.selectedAvatar)


    this.userService.updateProfile(this.formData).subscribe(
      (response: any) => {
        console.log(response);
        this.profileUrl = response.user.avatar.url

        this.profile.updateProfile(this.profileUrl);
      }


    )

  }

}
