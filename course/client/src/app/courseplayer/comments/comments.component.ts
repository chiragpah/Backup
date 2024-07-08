import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import Swal from 'sweetalert2'
import { CommentService } from '../../../../services/comment.service';
import { ActivatedRoute } from '@angular/router';
import { any } from 'video.js/dist/types/utils/events';
// import { SocketService } from '../../../../services/socket.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {
  courseId: any; // Replace with your actual courseId
  @Input() contentId: any; // Replace with your actual contentId
  newQuestionText: string = '';
  replyInputs: { [key: string]: string } = {};
  showReplies: boolean = false;

  comments: any[] = [];



  constructor(private commentService: CommentService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }


  addComment(): void {
    console.log(this.newQuestionText);
    this.commentService.addComment(this.courseId, this.contentId, this.newQuestionText).subscribe(
      (response) => {
        console.log('Comment added successfully:', response);
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
          title: "Comment added successfully"
        });
        this.loadComments()
        // this.socketService.emit('notification', { data: response });
      },
      (error) => {
        console.error('Error adding comment:', error);
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
          icon: "error",
          title: "Failed to Add Comment "
        });
        // Handle error
      }

    );
    this.newQuestionText = '';
  }
  toggleReplies(comment: any) {
    // this.showReplies = !this.showReplies;
    comment.showReplies = !comment.showReplies;
  }
  addreply(commentId: string, replyInput: string) {
    console.log(commentId);

    this.commentService.addReply(this.courseId, this.contentId, replyInput, commentId).subscribe(
      (response) => {
        console.log('Reply added successfully:', response);
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
          title: "Reply Sent"
        });
        this.loadComments();
        this.cdr.detectChanges();

      },
      (error) => {
        console.error('Error adding reply:', error);
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
          icon: "error",
          title: "Failed to Send Reply"
        });
        // Handle error
      }

    );
    this.replyInputs[commentId] = '';

  }

















  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');

    this.loadComments();


  }

  loadComments(): void {
    console.log("we are inside loadcomments " + this.courseId + " " + this.contentId)
    const showRepliesStates: boolean[] = this.comments.map(comment => comment.showReplies);
    this.commentService.getComments(this.courseId.toString(), this.contentId.toString()).subscribe(
      (response) => {
        console.log('Comments loaded successfully:', response);
        this.comments = response.comments.reverse();
        console.log("we got the all comments ", this.comments[0].commentReplies);
        this.comments.forEach((comment, index) => {
          comment.showReplies = showRepliesStates[index];
        });
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error loading comments:', error);
        // Handle error
      }
    );
  }

}