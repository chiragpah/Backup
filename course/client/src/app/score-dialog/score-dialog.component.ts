// import { Component, Inject, AfterViewInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-score-dialog',
//   templateUrl: './score-dialog.component.html',
//   styleUrls: ['./score-dialog.component.css']
// })
// export class ScoreDialogComponent {
//   @ViewChild('ratingElement') ratingElement!: ElementRef;
//   constructor(
//     private dialogRef: MatDialogRef<ScoreDialogComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any,
//     private router: Router,
//     private renderer: Renderer2
//   ) { }
//   closeDialog(): void {
//     // Close the dialog
//   }
//   retakeQuiz() {
//     window.location.reload();
//   }
//   closeDialogAndNavigate(): void {
//     this.dialogRef.close();
//   }
//   ngAfterViewInit(): void {
//     // Find all rating items
//     const ratings = this.ratingElement.nativeElement;
//     const ratingContent = ratings.innerHTML;
//     const ratingScore = parseInt(ratingContent, 10);
//     const scoreClass =
//       ratingScore < 40 ? 'bad' : ratingScore < 60 ? 'meh' : 'good';

//     this.renderer.addClass(ratings, scoreClass);
//     const ratingColor = window.getComputedStyle(ratings).backgroundColor;
//     const gradient = `background: conic-gradient(${ratingColor} ${ratingScore}%, transparent 0 100%)`;
//     this.renderer.setStyle(ratings, 'background', gradient);
//     ratings.innerHTML = `<span>${ratingScore} ${ratingContent.indexOf('%') >= 0 ? '<small>%</small>' : ''
//       }</span>`;
//   }
// }
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-score-dialog',
  templateUrl: './score-dialog.component.html',
  styleUrls: ['./score-dialog.component.css']
})
export class ScoreDialogComponent {


  constructor(
    private dialogRef: MatDialogRef<ScoreDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,

  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  retakeQuiz(): void {
    window.location.reload();
  }

  closeDialogAndNavigate(): void {
    this.dialogRef.close();
    this.router.navigate(['/courses']);
  }

}
