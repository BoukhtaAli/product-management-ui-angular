import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AppDataState, DataStateEnum} from "../../../state/appData.state";
import {Product} from "../../../model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productList$ ?: Observable<AppDataState<Product[]>>;

  DataStateEnum = DataStateEnum;

  constructor() { }

  ngOnInit(): void {
  }
}
