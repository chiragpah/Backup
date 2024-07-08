import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursepageComponent } from './coursepage/coursepage.component';
import { CourseDescriptionComponent } from './course-description/course-description.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { OtpComponent } from './otp/otp.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminComponent } from './user-dashboard/dashboardComp/admin/admin.component';
import { FaqComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CourseplayerComponent } from './courseplayer/courseplayer.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { QuizComponent } from './quiz/quiz.component';
import { AuthGuardService } from '../../services/auth-guard.service';
import { EditCourseComponent } from './edit-course/edit-course.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'courses',
    component: CoursepageComponent
  },

  { path: 'course/:id', component: CourseDescriptionComponent },
  { path: 'CoursePlayer/:id', canActivate: [AuthGuardService], component: CourseplayerComponent },
  { path: 'edit-course/:id', component: EditCourseComponent },
  {
    path: 'forgot-password',
    component: ForgotpasswordComponent
  },
  { path: 'otp', component: OtpComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'AdminDashboard', component: AdminComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'paypal/:id', canActivate: [AuthGuardService], component: PaymentComponent },

  { path: 'About', component: AboutUsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: 'test/:id', canActivate: [AuthGuardService], component: QuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
