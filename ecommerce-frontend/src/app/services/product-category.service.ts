import { map } from 'rxjs';

import { ProductCategory } from './../common/product-category';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService{

  constructor(private http: HttpClient) { }

  getProductCategories(){
    return this.http.get<ResponseProductCategory>("http://localhost:8080/api/productCategories")
    .pipe(
      map(response=>response._embedded.productCategories)
    );
  }
}
interface ResponseProductCategory{
  _embedded:{
    productCategories: ProductCategory[];
  }
}
