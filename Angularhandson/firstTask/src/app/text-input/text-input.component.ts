import { Component } from '@angular/core';

@Component({
  selector: 'app-text-input',
  template: `<hr><h1>Task5</h1><div>
  <label>Enter your text</label>
  <input [(ngModel)]='Textbox1'  placeholder='Enter you text'/>
  <p>Your Entered Text is:{{Textbox1}}</p></div>
  <hr>
  <h1>Task6</h1>
  <div>
  <label>Toggle Checkbox</label>
  <input type='checkbox' [(ngModel)]='Checkbox1' />
  <p *ngIf='Checkbox1'>Checkbox  is:{{Checkbox1}}</p>
  <p *ngIf='!Checkbox1'>Checkbox  is:{{Checkbox1}}</p>
  </div>`,
  styleUrl: '../app.component.css'
})
export class TextInputComponent {
  Textbox1: string = 'Hello this is Chirag';
  Checkbox1: boolean = false;




}
