import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductsComponent } from './components/product-management/products/products.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductAddComponent } from './components/product-management/product-add/product-add.component';
import { ProductUpdateComponent } from './components/product-management/product-update/product-update.component';
import {NOTYF, notyfFactory} from "./mixins/notyf/notyf.token";
import { ProductsNavBarComponent } from './components/product-management/products-nav-bar/products-nav-bar.component';
import { ProductListComponent } from './components/product-management/product-list/product-list.component';
import { ProductItemComponent } from './components/product-management/product-list/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    HomeComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    ProductsNavBarComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: NOTYF, useFactory: notyfFactory },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
