import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrl: '../app.component.css'
})
export class HelloWorldComponent {
  text1: string = "HELLO WORLD!!!!"
}
