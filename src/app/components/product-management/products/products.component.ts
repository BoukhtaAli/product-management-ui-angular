import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../services/products.service";
import {Product} from "../../../model/product";
import {Observable, of} from "rxjs";
import {catchError, map, startWith} from "rxjs/operators";
import {AppDataState, DataStateEnum} from "../../../state/appData.state";
import {Router} from "@angular/router";
import {NotyfService} from "../../../mixins/notyf/notyf.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList$ ?: Observable<AppDataState<Product[]>>;

  DataStateEnum = DataStateEnum;

  constructor(private productService : ProductsService, private router: Router, private notyfService: NotyfService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productList$ =  this.productService.getProducts().pipe(
      map(data => ({dataState : DataStateEnum.LOADED ,data: data })),
      startWith({dataState : DataStateEnum.LOADING}),
      catchError(error =>of({dataState: DataStateEnum.ERROR, errorMessage: error.message}))
    );
  }

  getSelectedProducts() {
    this.productList$ =  this.productService.getSelectedProducts().pipe(
      map(data => ({dataState : DataStateEnum.LOADED ,data: data })),
      startWith({dataState : DataStateEnum.LOADING}),
      catchError(error =>of({dataState: DataStateEnum.ERROR, errorMessage: error.message}))
    );
  }

  getAvailableProducts() {
    this.productList$ =  this.productService.getAvailableProducts().pipe(
      map(data => ({dataState : DataStateEnum.LOADED ,data: data })),
      startWith({dataState : DataStateEnum.LOADING}),
      catchError(error =>of({dataState: DataStateEnum.ERROR, errorMessage: error.message}))
    );
  }

  search(form: any) {
    this.productList$ =  this.productService.searchProducts(form.keyword).pipe(
      map(data => ({dataState : DataStateEnum.LOADED ,data: data })),
      startWith({dataState : DataStateEnum.LOADING}),
      catchError(error =>of({dataState: DataStateEnum.ERROR, errorMessage: error.message}))
    );
  }

  updateProductSelect(product: Product) {
    this.productService.updateProductSelected(product).subscribe(
      data => {
        product.selected = data.selected;
      }
    );
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(
      data => {
        this.getProducts();
        this.notyfService.showNotyf("success", "product has been delete!");
      }
    )
  }

  addNewProduct() {
    this.router.navigate(["/addProduct"]);
  }

  updateProduct(id: number) {
    this.router.navigate(["/updateProduct",id]);
  }
}