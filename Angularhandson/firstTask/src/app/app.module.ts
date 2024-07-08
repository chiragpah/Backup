import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { Task3Component } from './task3/task3.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TextInputComponent } from './text-input/text-input.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    EmployeeListComponent,
    Task3Component,
    UserProfileComponent,
    TextInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
