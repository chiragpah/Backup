import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from '../../Modell/book';
import { ProductService } from '../../Services/product.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { response } from 'express';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  bookForm: FormGroup;
  selectedFile!: File;
  @Output() booksUpdated: EventEmitter<Book[]> = new EventEmitter<Book[]>();
  baseUrl = 'https://example.com/images/';
  constructor(private fb: FormBuilder, private productService: ProductService, @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<EditProductComponent>) {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      isbn: ['', [Validators.required]],
      publisher: ['', [Validators.required]],
      bookPrice: 0,
      publicationDate: ['',],
      bookimageUrl: ['', [Validators.required]],
    })
  }
  ngOnInit() {

    this.productService.getBookById(this.data.productId).subscribe((response: Book) => {
      console.log(response)
      this.bookForm.patchValue({
        title: response.title,
        author: response.author,
        isbn: response.isbn,
        publisher: response.publisher,
        bookPrice: response.bookPrice,
        publicationDate: response.publicationDate,
        bookimageUrl: response.bookimageUrl
      });
    })


    // this.productService.

  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file);

    if (file) {
      this.selectedFile = file;
    }
  }

  formSubmit() {
    const updatedProduct: Book = this.bookForm.value;
    console.log(updatedProduct);

    // if (this.bookForm.valid) {
    const formData = new FormData();
    console.log(this.bookForm.value)
    Object.keys(this.bookForm.value).forEach(key => {
      console.log(key, this.bookForm.value[key]);

      formData.append(key, this.bookForm.value[key]);
    });
    if (this.selectedFile) {
      formData.append('bookimageUrl', this.selectedFile);
    }
    console.log(formData);
    this.productService.editBook(formData, this.data.productId).subscribe(
      response => {
        console.log('Product updated successfully:', response);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        // Emit updated books array to parent
        this.productService.getAllProduct().subscribe(response => {
          console.log(response);

          this.booksUpdated.emit(response);
        })

        this.dialogRef.close(); // Close dialog

      },
      error => {
        console.error('Error saving product:', error);
        //     // Handle error
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      })


    // }
  }
  closeDialog() {
    this.dialogRef.close(); // Close dialog
  }
}
