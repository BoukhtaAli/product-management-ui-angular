import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductActionEvent, ProductEventEnum} from "../../../state/appData.state";

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  constructor() { }

  @Output() eventEmitter : EventEmitter<ProductActionEvent> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  getProducts() {
    this.eventEmitter.emit({type: ProductEventEnum.GET_PRODUCT, payload: null});
  }

  getSelectedProducts() {
    this.eventEmitter.emit({type: ProductEventEnum.GET_SELECTED_PRODUCTS, payload: null});
  }

  getAvailableProducts() {
    this.eventEmitter.emit({type: ProductEventEnum.GET_AVAILABLE_PRODUCTS, payload: null});
  }

  addNewProduct() {
    this.eventEmitter.emit({type : ProductEventEnum.ADD_PRODUCT, payload: null});
  }

  search(value: string) {
    this.eventEmitter.emit({type : ProductEventEnum.SEARCH_PRODUCT_BY_NAME , payload : value});
  }
}
