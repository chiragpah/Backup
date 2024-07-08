import { Component, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray, AbstractControl } from '@angular/forms';
import { EditCourseService } from '../../../services/edit-course.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../../Interfaces/Course.interface';
import { CourseDescriptionService } from '../../../services/course-description.service';
@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.css'
})
export class EditCourseComponent {
  selectedThumbnail: any;
  formData: FormData = new FormData();
  editcourse: FormGroup;
  courseID: any = '';
  course!: Course;
  courseDetails: any;

  constructor(private cdr: ChangeDetectorRef, private formBuilder: FormBuilder, private edit: EditCourseService, private route: ActivatedRoute, private CourseContent: CourseDescriptionService) { }

  ngOnInit(): void {
    this.courseID = this.route.snapshot.paramMap.get('id');
    console.log('ID:', this.courseID);
    this.CourseContent.getParticularCourseData(this.courseID).subscribe(data => {
      this.course = data;
      console.log(this.course);
      this.initializeForm(this.course.course.courseData, this.course.course.testGroup);
      // this.cdr.detectChanges();


    })




    console.log(this.editcourse);


  }
  initializeForm(courseData: any[], testGroup: any[]): void {
    // console.log(this.courseData);

    this.editcourse = this.formBuilder.group({
      name: [this.course.course ? this.course.course.name : '', Validators.required],
      description: [this.course ? this.course.course.description : '', Validators.required],
      price: [this.course ? this.course.course.price : '', Validators.required],
      estimatedprice: [this.course ? this.course.course.estimatedPrice : ''],
      tags: [this.course ? this.course.course.tags : ''],
      courselevel: [this.course ? this.course.course.level : ''],
      thumbnail: [], // Thumbnail might not be initialized here, depending on your requirements
      courseData: this.formBuilder.array([]),
      testGroup: this.formBuilder.array([]),
    });

    if (courseData && courseData.length > 0) {
      courseData.forEach(section => {
        this.addCourseData(section.title, section.description, section.videoUrl, section.videoLength);
      });


    }
    if (testGroup && testGroup.length > 0) {
      testGroup.forEach(section => {
        this.addQuizData(section.question, section.optionA, section.optionB, section.optionC, section.optionD, section.correctOption);
      });
    }
  }
  addQuizData(question: any, optionA: any, optionB: any, optionC: any, optionD: any, correctOption: any) {
    const section = this.formBuilder.group({
      question: [question, Validators.required],
      optionA: [optionA, Validators.required],
      optionB: [optionB, Validators.required],
      optionC: [optionC, Validators.required],
      optionD: [optionD, Validators.required],
      correctOption: [correctOption, Validators.required],
    });
    this.testGroup.push(section)
  }
  addCourseData(title = '', description = '', videoUrl: any, videoLength = ''): void {
    console.log(description);

    const section = this.formBuilder.group({
      title: [title, Validators.required],
      description: [description, Validators.required],
      videoUrl: this.formBuilder.group({ // Creating a nested form group for videoUrl
        public_id: [videoUrl?.public_id],
        url: [videoUrl?.url]
      }),
      videoLength: [videoLength, Validators.required]
    });
    // console.log(courseData);


    this.courseData.push(section);

    console.log(typeof this.courseData);


  }
  get courseData(): FormArray {
    return this.editcourse.get('courseData') as FormArray;
  }
  get testGroup(): FormArray {
    return this.editcourse.get('testGroup') as FormArray;
  }
  get sections() {
    return this.editcourse.get('courseData') as FormArray;
  }
  addSection() {
    const courseDatas = this.formBuilder.group({
      title: [''],
      description: [''],
      videoLength: ['']
      // Add more form controls for each section as needed
    });
    this.sections.push(courseDatas);
  }
  removeSection(index: number) {
    this.sections.removeAt(index);
  }
  get testQuestions() {
    return (this.editcourse.get('testGroup') as FormArray);
  }

  // Function to add a new test question
  addTestQuestion() {
    const questions = this.formBuilder.group({
      question: [''],
      optionA: [''],
      optionB: [''],
      optionC: [''],
      optionD: [''],
      correctOption: ['']
    });
    this.testQuestions.push(questions);
  }
  removeTestQuestion(index: number) {
    this.testQuestions.removeAt(index);
  }
  submitForm() {

    // Handle form submission
    // console.log(this.editcourse.value);

    if (this.editcourse.valid) {
      console.log(this.editcourse.value);
      const name = this.editcourse.get('name')?.value;


      const description = this.editcourse.get('description')?.value;
      // console.log(description);

      const thumbnail = this.editcourse.get('thumbnail.url')?.value;
      // console.log(thumbnail);

      // const trailer = this.addcourse.get('trailer')?.value;
      const difficulty = this.editcourse.get('difficulty')?.value;
      const price = this.editcourse.get('price')?.value;
      const estimatedPrice = this.editcourse.get('estimatedprice')?.value;
      const tags = this.editcourse.get('tags')?.value;
      this.formData.append('name', name);
      // console.log("hii");

      this.formData.append('description', description);

      // this.formData.append('thumbnail', thumbnail);

      this.formData.append('estimatedPrice', estimatedPrice);
      this.formData.append('difficulty', difficulty);
      this.formData.append('price', price);
      this.formData.append('tags', tags);
      const courseData = this.editcourse.get('courseData') as FormArray;
      for (let i = 0; i < courseData.length; i++) {
        const courseItem = courseData.at(i) as FormGroup;
        this.formData.append(`courseData[${i}][title]`, courseItem.get('title')?.value);
        this.formData.append(`courseData[${i}][description]`, courseItem.get('description')?.value);
        // const videoUrlObject = {
        //   public_id: videoUrlValue.public_id,
        //   url: videoUrlValue.url
        // };
        const videoUrlValue = courseItem.get('videoUrl')?.value;
        console.log(videoUrlValue);

        this.formData.append(`courseData[${i}][videoUrl][public_id]`, videoUrlValue.public_id);
        this.formData.append(`courseData[${i}][videoUrl][url]`, videoUrlValue.url);

        this.formData.append(`courseData[${i}][videoLength]`, courseItem.get('videoLength')?.value);

      }
      const testGroup = this.editcourse.get('testGroup') as FormArray;
      for (let i = 0; i < testGroup.length; i++) {
        const questionItem = testGroup.at(i) as FormGroup;
        this.formData.append(`testGroup[${i}][question]`, questionItem.get('question')?.value);
        this.formData.append(`testGroup[${i}][optionA]`, questionItem.get('optionA')?.value);
        this.formData.append(`testGroup[${i}][optionB]`, questionItem.get('optionB')?.value);
        this.formData.append(`testGroup[${i}][optionC]`, questionItem.get('optionC')?.value);

        this.formData.append(`testGroup[${i}][optionD]`, questionItem.get('optionD')?.value);
        this.formData.append(`testGroup[${i}][correctOption]`, questionItem.get('correctOption')?.value);


      }
      console.log('formData', this.formData);


      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,Edit it!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.edit.editCourse(this.formData, this.courseID).subscribe(
            (response: any) => {
              Swal.fire({
                title: "Course Updated!",
                text: "Your Course has been Updated.",
                icon: "success"
              });
              console.log('data received');

            },
            (error: any) => {
              Swal.fire({
                title: "Error!",
                text: "Enter Data Properly",
                icon: "error"
              });
            }
          )
        }
        this.formData = new FormData();
      })

    }

    else {
      console.log(this.editcourse);
      Swal.fire({
        title: "Error!",
        text: "Enter Course Data Properly",
        icon: "error"
      });
      Object.keys(this.editcourse.controls).forEach(field => {
        const control = this.editcourse.get(field);
        if (control instanceof FormGroup) {
          // If it's a nested FormGroup, iterate over its controls
          Object.keys(control.controls).forEach(subField => {
            const subControl = control.get(subField);
            if (subControl && !subControl.valid) {
              // Log the invalid subField
              console.log('Invalid field:', subField);
            }
          });

        }
        else {
          // If it's a regular FormControl, log its validity status
          if (control && !control.valid) {
            console.log('Invalid field:', field);
          }
        }
      })
    }
    // this.editcourse.reset();
  }

  onImageSelected(event: any) {
    const fileInput = event.target; // Get the file input element
    this.selectedThumbnail = fileInput.files[0]; // Get the selected file
    console.log('Thumbnail file:', this.selectedThumbnail);
    this.formData.append("image", this.selectedThumbnail);
  }

  onVideoSelected(event: any, index: number) {
    const fileInput = event.target;
    const selectedFiles = fileInput.files;
    if (selectedFiles) {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];

        this.formData.append(`videos[${index}]`, file);
      }
    }
    console.log(selectedFiles);


  }
}
