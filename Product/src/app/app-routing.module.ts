import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDisplayTableComponent } from './product-display-table/product-display-table.component';
import { ProductHomeComponent } from './product-home/product-home.component';

const routes: Routes = [{
  path: 'productDisplayTable',
  component: ProductDisplayTableComponent
},
{
  path: '',
  component: ProductHomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
