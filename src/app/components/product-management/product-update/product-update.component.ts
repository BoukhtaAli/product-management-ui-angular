import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../../services/products.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotyfService} from "../../../mixins/notyf/notyf.service";
import {ProductEventService} from "../../../state/productEvent.service";
import {ProductEventEnum} from "../../../state/appData.state";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  id : number | undefined;
  productFormGroup : FormGroup = this.formBuilder.group({
    id : [0, Validators.required],
    name : ["", Validators.required],
    price: [0, Validators.required],
    quantity: [0, Validators.required],
    available: [false, Validators.required],
    selected: [true, Validators.required]
  });

  constructor(private route : ActivatedRoute,
              private productService : ProductsService,
              private formBuilder: FormBuilder,
              private router: Router, private notyfService : NotyfService,
              private productEventService: ProductEventService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProductById();
  }

  private getProductById() {
    this.productService.getProductById(this.id).subscribe(
      product => {
        this.productFormGroup = this.formBuilder.group({
          id: [product.id, Validators.required],
          name: [product.name, Validators.required],
          price: [product.price, Validators.required],
          quantity: [product.quantity, Validators.required],
          available: [product.available, Validators.required],
          selected: [product.selected, Validators.required]
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  updateProduct() {

    if(this.productFormGroup.invalid){
      this.productFormGroup.markAllAsTouched();
      this.notyfService.showNotyf("error", "form is invalid!");
      return;
    }

    this.productService.updateProduct(this.productFormGroup.value).subscribe(
      data => {
        this.router.navigate(["/products"]);
        this.notyfService.showNotyf("success", "product has been updated!");
        this.productEventService.publishEvent({type : ProductEventEnum.PRODUCT_UPDATED, payload: null});
      }
    );
  }

  closeForm() {
    this.router.navigate(["/products"]);
  }

  resetForm() {
    this.ngOnInit();
    this.notyfService.showNotyf("warning", "form has been reset!");
  }
}
