import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductService } from '../Services/product.service';
import { Book } from '../Modell/book';
@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrl: './product-home.component.css'
})
export class ProductHomeComponent {
  Book: Book[] = [];
  constructor(private dialog: MatDialog, private productService: ProductService) { }
  openAddProduct() {
    console.log("dialog");

    this.dialog.open(AddProductComponent)
  }
  ngOnInit() {
    this.productService.getAllProduct().subscribe((response) => {
      console.log(response);
      this.Book = response;

    })
  }
}
