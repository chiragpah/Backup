import { Component, OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CourseplayerService } from '../../../services/courseplayer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from '../../../services/loader.service';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { debug } from 'util';
@Component({
  selector: 'app-courseplayer',
  templateUrl: './courseplayer.component.html',
  styleUrl: './courseplayer.component.css',

})
export class CourseplayerComponent implements OnInit {
  course: any;
  ID: any;
  selectedVideo: string = '';
  selectedTitle: string = '';
  playerInitialized: boolean = false;
  totaltime: number = 0;
  selectedDescription: string = '';
  contentId: string;
  currentComponent: number = 0;
  currentVideoIndex: number = 0;
  currentvideo: number = 0
  videoEnded!: boolean;
  constructor(private router: Router, private loaderService: LoaderService, private CourseContent: CourseplayerService, private elementRef: ElementRef, private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {

    this.currentComponent = 1;
    this.ID = this.route.snapshot.paramMap.get('id');
    console.log('ID:', this.ID);
    this.CourseContent.getParticularCourseData(this.ID).subscribe(data => {
      this.course = data.content;
      console.log("content", this.course);

      for (let time of this.course)
        this.totaltime += Number(time.videoLength);


      console.log(this.selectedVideo);

      this.selectedVideo = this.course[0].videoUrl.url;
      this.selectedTitle = this.course[0].title;
      this.selectedDescription = this.course[0].description;
      this.cdr.detectChanges();
      this.initializeVideoPlayer();
      this.contentId = this.course[0]._id;
      this.showComponent(this.currentComponent)
    })

  }


  playNextVideo() {
    // Find the index of the currently selected video
    const currentIndex = this.course.findIndex((course: any) => course.videoUrl.url === this.selectedVideo);


    // Check if the current video is not the last one
    if (currentIndex < this.course.length - 1) {
      // Get the URL of the next video
      const nextVideoUrl = this.course[currentIndex + 1].videoUrl.url;
      console.log(nextVideoUrl);

      // Play the next video
      this.selectedVideo = nextVideoUrl;
      this.selectedTitle = this.course[currentIndex + 1].title;
      this.selectedDescription = this.course[currentIndex + 1].description;
      this.contentId = this.course[currentIndex + 1]._id;
      const player = videojs('myPlayerID');
      player.src(this.selectedVideo);



    }
  }
  playPreviousVideo() {
    // Find the index of the currently selected video
    const currentIndex = this.course.findIndex((course: any) => course.videoUrl.url === this.selectedVideo);

    // Check if the current video is not the first one
    if (currentIndex > 0) {
      // Get the URL of the previous video
      const previousVideoUrl = this.course[currentIndex - 1].videoUrl.url;
      this.selectedTitle = this.course[currentIndex - 1].title;
      this.selectedDescription = this.course[currentIndex - 1].description;
      this.contentId = this.course[currentIndex - 1]._id;
      // Play the previous video
      this.selectedVideo = previousVideoUrl;
      const player = videojs('myPlayerID');
      player.src(this.selectedVideo);

    }
  }







  playVideo(event: { courseItem: any, index: number }) {
    this.selectedVideo = event.courseItem.videoUrl.url;
    this.selectedTitle = event.courseItem.title;
    this.selectedDescription = event.courseItem.description;
    this.currentvideo = event.index

    console.log(this.selectedVideo);

    // this.initializeVideoPlayer();
    const videoElement = document.getElementById('sourceId');

    console.log(videoElement);

    if (videoElement) {
      videoElement.setAttribute('src', this.selectedVideo);
    }
    const player = videojs('myPlayerID');
    player.src(this.selectedVideo);

  }

  initializeVideoPlayer() {


    // setTimeout(() => {
    const player = videojs('myPlayerID');

    player.ready(() => {
      console.log("inside videoplayer");
      const jumpAmount = 5;
      let controlBar;
      let insertBeforeNode;
      let newElementBB;
      let newElementFB;
      let newImageBB;
      let newImageFB;

      // Create divs for buttons
      newElementBB = document.createElement("div");
      newElementFB = document.createElement("div");
      newImageBB = document.createElement("img");
      newImageFB = document.createElement("img");

      // Assign IDs for later element manipulation
      newElementBB.id = "backButton";
      newElementFB.id = "forwardButton";

      // Assign properties to elements and assign to parents

      newImageBB.setAttribute("src", "../../assets/fast-backward.png ");
      newImageBB.style.paddingTop = '5px';
      newImageBB.style.marginRight = '5px';


      newImageFB.setAttribute("src", "../../assets/fast-forward-button.png");
      newImageFB.style.paddingTop = '5px';
      newElementBB.appendChild(newImageBB);
      newElementFB.appendChild(newImageFB);




      // Get controlbar and insert elements
      controlBar = player.$(".vjs-control-bar");

      // Get the element to insert buttons in front of in conrolbar
      insertBeforeNode = player.$(".vjs-volume-panel");

      // Insert the button div in proper location
      if (controlBar) {
        controlBar.insertBefore(newElementBB, insertBeforeNode);
        controlBar.insertBefore(newElementFB, insertBeforeNode);
      } else {
        console.error("Control bar not found");
      }

      newElementBB.addEventListener("click", () => {
        const videoTime = player.currentTime();
        if (typeof videoTime === 'number') {
          let newTime;
          const rewindAmt = jumpAmount;
          if (videoTime >= rewindAmt) {
            newTime = videoTime - rewindAmt;
          } else {
            newTime = 0;
          }
          player.currentTime(newTime);
        }
      });


      // Forward button logic, don't jump past the duration
      newElementFB.addEventListener("click", () => {
        const videoTime = player.currentTime();
        const videoDuration = player.duration();
        if (typeof videoTime === 'number' && typeof videoDuration === 'number') {
          let newTime;
          const forwardAmt = jumpAmount;
          if (videoTime + forwardAmt <= videoDuration) {
            newTime = videoTime + forwardAmt;
          } else {
            newTime = videoDuration;
          }
          player.currentTime(newTime);
        } else {
          console.error("Current time or duration is not available");
        }
        this.playerInitialized = true;
      });

    });


  }



  showComponent(componentNumber: number): void {
    console.log(componentNumber);

    this.currentComponent = componentNumber;
  }
  navigateToTest() {


    this.router.navigate(['/test', this.ID]);
  }
  onVideoEnded() {
    console.log('Video ended', this.currentVideoIndex);
    this.videoEnded = true;
    this.currentVideoIndex = this.currentvideo


  }
}


