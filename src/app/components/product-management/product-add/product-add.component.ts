import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../../services/products.service";
import {Router} from "@angular/router";
import {NotyfService} from "../../../mixins/notyf/notyf.service";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productFormGroup : FormGroup = this.formBuilder.group({
                                  name : ["", Validators.required],
                                  price: [0, Validators.required],
                                  quantity: [0, Validators.required],
                                  available: [false, Validators.required],
                                  selected: [true, Validators.required]
                                });

  constructor(private formBuilder : FormBuilder, private productService: ProductsService, private router : Router, private notyfService : NotyfService) { }

  ngOnInit(): void {
  }

  addNewProduct() {

    if(this.productFormGroup.invalid){
      this.productFormGroup.markAllAsTouched();
      this.notyfService.showNotyf("error", "form is invalid!");
      return;
    }

    this.productService.addProduct(this.productFormGroup.value).subscribe(
      data => {
        this.router.navigate(["/products"]);
        this.notyfService.showNotyf("success", "product has been added!");
      }
    );
  }

  closeForm() {
    this.router.navigate(["/products"]);
  }

  resetForm() {
    this.productFormGroup = this.formBuilder.group({
      name : ["", Validators.required],
      price: [0, Validators.required],
      quantity: [0, Validators.required],
      available: [false, Validators.required],
      selected: [true, Validators.required]
    });
    this.notyfService.showNotyf("warning", "form has been reset!");
  }
}
