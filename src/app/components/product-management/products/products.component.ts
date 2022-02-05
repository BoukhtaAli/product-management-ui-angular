import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../services/products.service";
import {Product} from "../../../model/product";
import {Observable, of} from "rxjs";
import {catchError, map, startWith} from "rxjs/operators";
import {AppDataState, DataStateEnum, ProductActionEvent, ProductEventEnum} from "../../../state/appData.state";
import {Router} from "@angular/router";
import {NotyfService} from "../../../mixins/notyf/notyf.service";
import {ProductEventService} from "../../../state/productEvent.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList$ ?: Observable<AppDataState<Product[]>>;

  constructor(private productService : ProductsService,
              private router: Router,
              private notyfService: NotyfService,
              private productEventService: ProductEventService) { }

  ngOnInit(): void {
    this.getProducts();
    this.productEventService.productEventSubjectObservable.subscribe((actionEvent : ProductActionEvent) => {
      this.onEvent(actionEvent);
    });
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

  search(name: string) {
    this.productList$ =  this.productService.searchProducts(name).pipe(
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
        this.notyfService.showNotyf("success", "product has been delete!");
        this.getProducts();
      }
    )
  }

  addNewProduct() {
    this.router.navigate(["/addProduct"]);
  }

  updateProduct(id: number) {
    this.router.navigate(["/updateProduct", id]);
  }

  onEvent($event: ProductActionEvent) {
    switch ($event.type) {
      case ProductEventEnum.GET_PRODUCT:
        this.getProducts();
        break;
      case ProductEventEnum.GET_SELECTED_PRODUCTS:
        this.getSelectedProducts();
        break;
      case ProductEventEnum.GET_AVAILABLE_PRODUCTS:
        this.getAvailableProducts();
        break;
      case ProductEventEnum.ADD_PRODUCT:
        this.addNewProduct();
        break;
      case ProductEventEnum.SEARCH_PRODUCT_BY_NAME:
        this.search($event.payload.keyword);
        break;
      case ProductEventEnum.UPDATE_PRODUCT:
        this.updateProduct($event.payload);
        break;
      case ProductEventEnum.DELETE_PRODUCT:
        this.deleteProduct($event.payload);
        break;
      case ProductEventEnum.UPDATE_PRODUCT_SELECT:
        this.updateProductSelect($event.payload);
        break;
    }
  }
}
