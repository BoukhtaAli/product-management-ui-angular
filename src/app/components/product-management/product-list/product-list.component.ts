import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {AppDataState, DataStateEnum, ProductActionEvent, ProductEventEnum} from "../../../state/appData.state";
import {Product} from "../../../model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productList$ ?: Observable<AppDataState<Product[]>>;
  @Output() productEventEmitter : EventEmitter<ProductActionEvent> = new EventEmitter<ProductActionEvent>();

  DataStateEnum = DataStateEnum;

  constructor() { }

  ngOnInit(): void {
  }

  updateProductSelect(product: Product) {
    this.productEventEmitter.emit({type: ProductEventEnum.UPDATE_PRODUCT_SELECT, payload: product});
  }

  deleteProduct(id: number) {
    this.productEventEmitter.emit({type: ProductEventEnum.DELETE_PRODUCT, payload: id});
  }

  updateProduct(id: number) {
    this.productEventEmitter.emit({type: ProductEventEnum.UPDATE_PRODUCT, payload: id});
  }
}
