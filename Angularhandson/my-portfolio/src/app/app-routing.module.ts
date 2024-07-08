import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { MyProjectsComponent } from './component/my-projects/my-projects.component';
import { MySkillsComponent } from './component/my-skills/my-skills.component';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes = [{ path: '', component: AboutMeComponent }, { path: 'projects', component: MyProjectsComponent }, { path: 'skills', component: MySkillsComponent }, { path: 'contact', component: ContactComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
