import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../Services/product.service';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2'
import { customTitleValidator } from './validation'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  bookForm: FormGroup;
  selectedFile!: File;
  constructor(private fb: FormBuilder, private productService: ProductService, private dialogRef: MatDialogRef<AddProductComponent>) {







    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      author: ['', [Validators.required, Validators.minLength(5)]],
      isbn: ['', [Validators.required, Validators.minLength(5)]],
      publisher: ['', [Validators.required, Validators.minLength(5)]],
      bookPrice: 0,
      publicationDate: ['',],
      bookimageUrl: ['', [Validators.required, Validators.minLength(5)]],

    })
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file);

    if (file) {
      this.selectedFile = file;
    }
  }
  formSubmit() {
    if (this.bookForm.valid) {
      const formData = new FormData();
      console.log(this.bookForm.value)
      Object.keys(this.bookForm.value).forEach(key => {
        formData.append(key, this.bookForm.value[key]);
      });
      formData.append('bookimageUrl', this.selectedFile);
      console.log(formData);
      this.productService.createProduct(formData).subscribe(
        response => {
          console.log('Product saved successfully:', response);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });

        },
        error => {
          console.error('Error saving product:', error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          // Handle error
        })
    }

  }
  closeDialog() {
    this.dialogRef.close(); // Close dialog
  }

}
