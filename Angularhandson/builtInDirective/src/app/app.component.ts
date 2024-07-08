import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'builtInDirective';
  selectedItem: any;
  selectItem(item: any) {
    // Handle item click here
    console.log('Item clicked:', item);


    this.selectedItem = item;
  }
}
