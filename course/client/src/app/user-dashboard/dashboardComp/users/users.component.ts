import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserDialogComponent } from '../../../delete-user-dialog/delete-user-dialog.component';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  usersres: any;

  constructor(private adminService: AdminService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchAllUsers();
    console.log('we got the users' + this.usersres);
  }

  fetchAllUsers(): void {
    this.adminService.getAllUser().subscribe(
      (users) => {
        this.usersres = users;
        console.log('we got the users', this.usersres.users); // Log here
        this.usersres = this.usersres.users
      },
      (error) => console.error('Error fetching users:', error)
    );
  }
  deleteUser(user: any) {
    console.log(user);
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      width: '250px',
      data: { name: user.name }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Delete logic goes here
        this.adminService.deleteUser(user._id).subscribe((response) => {
          console.log(response);
          this.fetchAllUsers();
        });
      }

    });
  }


}