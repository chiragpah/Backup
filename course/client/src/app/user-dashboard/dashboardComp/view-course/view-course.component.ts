import { Component } from '@angular/core';
import { AdminService } from '../../../../../services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserDialogComponent } from '../../../delete-user-dialog/delete-user-dialog.component';
@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrl: './view-course.component.css'
})
export class ViewCourseComponent {
  coursesres: any;

  // Inject the CourseService in the constructor
  constructor(private courseService: AdminService, public dialog: MatDialog) { }

  ngOnInit(): void {
    // Call the getAllCourses function from the service
    console.log("we are inside the courser service")
    this.loadCourse();
  }
  loadCourse() {
    this.courseService.getAllCourse().subscribe(
      (courses) => {
        this.coursesres = courses;
        console.log('Courses:', this.coursesres.courses);
        this.coursesres = this.coursesres.courses
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }

  deleteCourse(course: any): void {
    console.log("the id is " + course._id)
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      width: '250px',
      data: { name: course.name }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Delete logic goes here
        this.courseService.deleteCourseById(course._id).subscribe(
          () => {
            console.log('Course deleted successfully!');
            this.loadCourse();
            // Optionally, you can perform additional actions after successful deletion
          },
          (error: any) => {
            console.error('Error deleting course:', error);
            // Handle error as needed
          }
        );
      }

    });


  }
}
