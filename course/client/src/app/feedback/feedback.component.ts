import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FeedbackService } from '../../../services/feedback.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CourseDescriptionService } from '../../../services/course-description.service'
import { Course } from '../../../Interfaces/Course.interface';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit {

  courseId: string | null = null;
  course: any;
  ratingSelected: boolean = false;
  rating: number = 1;
  feedbackText: string = '';
  profileImage: string = '';

  constructor(private CourseContent: CourseDescriptionService, private feedbackService: FeedbackService, private route: ActivatedRoute, private snackBar: MatSnackBar, private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.loadFeedback();
  }
  loadFeedback() {
    this.courseId = this.route.snapshot.paramMap.get('id');
    console.log('ID:', this.courseId);
    if (this.courseId !== null) {
      this.CourseContent.getParticularCourseData(this.courseId).subscribe(data => {

        this.course = data.course.reviews.reverse();


        console.log(this.course);
        // this.profileImage=this.course.user
        this.cdr.detectChanges();

      })

    }
  }
  generateRange(n: number): number[] {


    return Array.from({ length: n }, (_, i) => i + 1)
  }
  submitFeedback() {
    console.log('Submitted Feedback:', typeof this.feedbackText, typeof this.rating, typeof this.courseId);
    const body = { comment: this.feedbackText, rating: this.rating }
    if (this.courseId !== null) {
      this.feedbackService.submitFeedback(body, this.courseId)
        .subscribe((response: any) => {
          console.log('Feedback submitted successfully:', response);
          //     // Reset form data
          const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Feedback Submitted successfully"
          });
          this.loadFeedback();
          this.feedbackText = ''
          this.rating = 1;

          //     this.formData = {};
          //     this.ratingSelected = false;
          //   }, (error: any) => {
          //     this.openSnackBar("Failed to Submit");
        });
    }
  }

  // onRatingSelected(rating: number) {
  //   this.ratingSelected = true;
  //   this.formData.rating = rating;
  // }



  setRating(value: number) {
    this.rating = value;
    console.log(value);

  }
}
