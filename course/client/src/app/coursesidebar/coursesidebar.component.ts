import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-coursesidebar',
  templateUrl: './coursesidebar.component.html',
  styleUrls: ['../courseplayer/courseplayer.component.css', './coursesidebar.component.css']
  // styleUrls: ['./example.component.css', './additional-styles.css']
})
export class CoursesidebarComponent implements OnInit {
  @Input() courseList: any[] = [];
  @Input() videoEnded: boolean = false;
  @Input() currentVideoIndex: number = -1;
  @Output() videoSelected = new EventEmitter<{ courseItem: any, index: number }>();
  selectedCourseIndex: number = 0;
  isSelected: boolean = false;
  isChecked: boolean[] = [];


  ngOnInit() {
    this.videoEnded = false
    console.log(this.currentVideoIndex, this.videoEnded);


  }
  ngOnChanges(): void {

    if (this.currentVideoIndex >= 0 && this.videoEnded) {
      this.isChecked[this.currentVideoIndex] = true;

    }
    console.log(this.isChecked);

  }

  selectVideo(courseItem: any, i: number) {
    console.log(this.courseList, i);
    this.courseList.forEach(item => item.isSelected = false);
    courseItem.isSelected = true;
    this.videoSelected.emit({ courseItem: courseItem, index: i }); // Emit the selected video ID or URL
  }

}
