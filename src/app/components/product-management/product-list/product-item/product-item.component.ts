import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../model/product";
import {ProductActionEvent, ProductEventEnum} from "../../../../state/appData.state";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product ?: Product;
  @Output() productEventEmitter : EventEmitter<ProductActionEvent> = new EventEmitter<ProductActionEvent>();

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
