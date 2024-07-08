import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../Services/product.service';
import { EditProductComponent } from './edit-product/edit-product.component';
import { Book } from '../Modell/book';
import { response } from 'express';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-product-display-table',
  templateUrl: './product-display-table.component.html',
  styleUrl: './product-display-table.component.css'
})
export class ProductDisplayTableComponent implements OnInit {
  private updateSubscription!: Subscription;
  Book: Book[] = [];
  baseUrl = 'http://localhost:3000/upload/';
  constructor(private dialog: MatDialog, private productService: ProductService) { }
  ngOnInit() {
    this.loadProducts();

  }
  loadProducts(): void {
    this.productService.getAllProduct().subscribe(products => {
      this.Book = products;
    });
  }

  openAddProduct(productId: string) {
    console.log("dialog", productId);
    const dialogRef = this.dialog.open(EditProductComponent, {
      data: { productId: productId }
    })
    // dialogRef.componentInstance.booksUpdated.subscribe((updatedBooks: Book[]) => {
    //   console.log('Books updated:', updatedBooks);
    //   // Here you can update your product table with the updated data
    // });

    dialogRef.afterClosed().subscribe(result => {
      // Handle the result emitted by the dialog if needed

      this.loadProducts()
    });

  }
  deleteProduct(productId: string) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // Execute service only if confirm button is clicked
        this.productService.deleteProduct(productId).subscribe((response) => {
          console.log(response);
          this.loadProducts()
          // Show success message after successful deletion
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        });
      }
    });


  }
}
