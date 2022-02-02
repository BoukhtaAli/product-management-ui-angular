import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProductsComponent} from "./components/product-management/products/products.component";
import {ProductAddComponent} from "./components/product-management/product-add/product-add.component";
import {ProductUpdateComponent} from "./components/product-management/product-update/product-update.component";

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'products',
    component : ProductsComponent
  },
  {
    path : 'addProduct',
    component : ProductAddComponent
  },
  {
    path : 'updateProduct/:id',
    component: ProductUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
