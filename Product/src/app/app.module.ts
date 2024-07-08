import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { ProductDisplayTableComponent } from './product-display-table/product-display-table.component';
import { AddProductComponent } from './add-product/add-product.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableModule } from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';
import { EditProductComponent } from './product-display-table/edit-product/edit-product.component';
import { DeleteProductComponent } from './product-display-table/delete-product/delete-product.component';
import { LoginComponent } from './Header/login/login.component';
import { RegistrationComponent } from './Header/registration/registration.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductCardComponent } from './product-home/product-card/product-card.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductDisplayTableComponent,
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    LoginComponent,
    RegistrationComponent,
    ProductHomeComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
