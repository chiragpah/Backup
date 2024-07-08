import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewCourseComponent } from '../user-dashboard/dashboardComp/view-course/view-course.component';
@Component({
  selector: 'app-delete-user-dialog',
  templateUrl: './delete-user-dialog.component.html',
  styleUrl: './delete-user-dialog.component.css'
})
export class DeleteUserDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteUserDialogComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  onCancelClick(): void {
    console.log(this.data.name);
    this.dialogRef.close(false);
  }
  onConfirmClick(): void {


    this.dialogRef.close(true);
  }
}
