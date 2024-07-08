import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  template: `

  <hr>
  <h1>TASK3</h1>
  <div>
  <h2>Selected Item:{{selectedItem}}</h2>
    <ul>
      <li *ngFor="let item of itemList" (click)="handleItemClick(item)" [ngClass]="{ 'selected': item === selectedItem }">
        {{ item }}
      </li>
    </ul>
    </div>
  `,
  styles: [`
    .selected {
      background-color: blue;
      font-weight: bold;
    }
    h1{
      display:flex;
      justify-content:center;
    }
   hr{
    height:2px;
    width:100%;
    background-color: black;
   }
  `]
})
export class Task3Component {
  itemList = ['Chirag', 'Shreyas', 'Amit'];
  selectedItem: string | null = null;
  handleItemClick(item: string): void {
    this.selectedItem = item;
  }
}
