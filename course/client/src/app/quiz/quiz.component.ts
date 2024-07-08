import { Component, OnInit } from '@angular/core';
import {
  MatDialog
} from '@angular/material/dialog';

import { ScoreDialogComponent } from '../score-dialog/score-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { CourseDescriptionService } from '../../../services/course-description.service';
import { Course } from '../../../Interfaces/Course.interface';
import log from 'video.js/dist/types/utils/log';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  ID: string | null = '';
  quiz!: any;
  question: string = '';
  optionA: string = '';
  optionB: string = '';
  optionC: string = '';
  optionD: string = '';
  i: number = 0;
  answer: string[] = [];

  selectedOption: string[] = [];
  constructor(private course: CourseDescriptionService, private route: ActivatedRoute, private dialog: MatDialog) { }
  ngOnInit() {
    this.ID = this.route.snapshot.paramMap.get('id')
    this.fetchQuestion();
  }
  fetchQuestion() {
    if (this.ID != null) {
      this.course.getParticularCourseData(this.ID).subscribe((response) => {
        console.log(response.course.testGroup);
        this.quiz = response.course.testGroup;
        this.question = this.quiz[0].question;
        this.optionA = this.quiz[0].optionA
        this.optionB = this.quiz[0].optionB
        this.optionC = this.quiz[0].optionC
        this.optionD = this.quiz[0].optionD
      })
    }
  }
  changeQuestion(index: number) {
    this.question = this.quiz[index].question
    this.optionA = this.quiz[index].optionA
    this.optionB = this.quiz[index].optionB
    this.optionC = this.quiz[index].optionC
    this.optionD = this.quiz[index].optionD
    this.i = index
  }
  prevQuestion() {
    if (this.i > 0) {
      this.i--;
      this.question = this.quiz[this.i].question
      this.optionA = this.quiz[this.i].optionA
      this.optionB = this.quiz[this.i].optionB
      this.optionC = this.quiz[this.i].optionC
      this.optionD = this.quiz[this.i].optionD

    }
  }
  nextQuestion() {
    if (this.i < this.quiz.length - 1) {
      this.i++;
      this.question = this.quiz[this.i].question
      this.optionA = this.quiz[this.i].optionA
      this.optionB = this.quiz[this.i].optionB
      this.optionC = this.quiz[this.i].optionC
      this.optionD = this.quiz[this.i].optionD

    }

  }
  toggleParentClass(option: any) {
    this.answer[this.i] = option;
    this.selectedOption[this.i] = option;
    console.log(this.answer);

  }
  submitQuiz() {
    let score = 0;
    for (let i = 0; i < this.quiz.length; i++) {
      if (this.answer[i] === this.quiz[i].correctOption) {
        score++;
      }
    }
    // const percentageScore = ((score / this.quiz.length) * 100).toFixed(2);

    // console.log(percentageScore);
    const totalQuestions = this.quiz.length;
    this.openScoreDialog(score, totalQuestions);

  }
  openScoreDialog(score: number, totalQuestions: number) {
    this.dialog.open(ScoreDialogComponent, {
      data: {
        score: score,
        totalQuestions: totalQuestions
      }
    });
  }
}