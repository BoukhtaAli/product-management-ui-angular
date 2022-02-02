import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  hostUrl : string = environment.hostUrl;

  constructor(private http  : HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.hostUrl);
  }

  getSelectedProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.hostUrl+"?selected=true");
  }

  getAvailableProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.hostUrl+"?available=true");
  }

  searchProducts(keyword: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.hostUrl+"?name_like="+keyword);
  }

  updateProductSelected(product : Product) : Observable<Product>{
    product.selected = !product.selected;
    return this.http.put<Product>(this.hostUrl+"/"+product.id, product);
  }

  deleteProduct(id : number) : Observable<void>{
    return this.http.delete<void>(this.hostUrl+"/"+id);
  }

  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.hostUrl, product);
  }

  getProductById(id: number | undefined): Observable<Product>{
    return this.http.get<Product>(this.hostUrl.concat("/").concat(String(id)));
  }

  updateProduct(product: Product): Observable<Product>{
    return this.http.put<Product>(this.hostUrl.concat("/").concat(String(product.id)), product);
  }
}
