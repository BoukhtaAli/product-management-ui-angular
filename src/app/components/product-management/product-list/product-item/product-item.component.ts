import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../../model/product";
import {ProductEventEnum} from "../../../../state/appData.state";
import {ProductEventService} from "../../../../state/productEvent.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product ?: Product;

  constructor(private productEventService: ProductEventService) { }

  ngOnInit(): void {
  }

  updateProductSelect(product: Product) {
    this.productEventService.publishEvent({type: ProductEventEnum.UPDATE_PRODUCT_SELECT, payload: product});
  }

  deleteProduct(id: number) {
    this.productEventService.publishEvent({type: ProductEventEnum.DELETE_PRODUCT, payload: id});
  }

  updateProduct(id: number) {
    this.productEventService.publishEvent({type: ProductEventEnum.UPDATE_PRODUCT, payload: id});
  }
}
