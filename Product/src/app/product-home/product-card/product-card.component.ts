import { Component, Input } from '@angular/core';
import { Book } from '../../Modell/book';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  baseUrl = 'http://localhost:3000/upload/';
  @Input() Book!: Book;
}
