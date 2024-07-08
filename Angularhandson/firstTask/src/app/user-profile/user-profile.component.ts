import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  template: `<hr><h1>TASK 4</h1><h2>USER PROFILE:</h2><p><b>NAME:</b>{{name}}</p><p><b>AGE:</b>{{age}}</p><p><b>EMAIL:</b>{{email}}</p>`,
  styleUrl: '../app.component.css'
})
export class UserProfileComponent {
  name: string = 'ChiragPahlajani';
  age: number = 22;
  email: string = 'chiragpah@cybage.com';
}
