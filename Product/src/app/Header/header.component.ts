import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private dialog: MatDialog) { }
  openAddProduct() {
    console.log("dialog");

    this.dialog.open(AddProductComponent)
  }
  openLogin() {
    console.log("dialog");

    this.dialog.open(LoginComponent)
  }
  openRegistration() {
    console.log("dialog");

    this.dialog.open(RegistrationComponent)
  }
}

