import {Component, OnInit} from '@angular/core';
import {ProductEventEnum} from "../../../state/appData.state";
import {ProductEventService} from "../../../state/productEvent.service";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  constructor(private productEventService: ProductEventService) { }

  ngOnInit(): void {
  }

  getProducts() {
    this.productEventService.publishEvent({type: ProductEventEnum.GET_PRODUCT, payload: null});
  }

  getSelectedProducts() {
    this.productEventService.publishEvent({type: ProductEventEnum.GET_SELECTED_PRODUCTS, payload: null});
  }

  getAvailableProducts() {
    this.productEventService.publishEvent({type: ProductEventEnum.GET_AVAILABLE_PRODUCTS, payload: null});
  }

  addNewProduct() {
    this.productEventService.publishEvent({type: ProductEventEnum.ADD_PRODUCT, payload: null});
  }

  search(value: string) {
    this.productEventService.publishEvent({type: ProductEventEnum.SEARCH_PRODUCT_BY_NAME, payload: value});
  }
}
