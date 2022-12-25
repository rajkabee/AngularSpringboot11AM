
import { Product } from './../common/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl="http://localhost:8080/api/products";
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<GetResponseProducts>(this.baseUrl).pipe(
    map(response => response._embedded.products)
    );
  }

  getProductList(theCategoryId: number): Observable<Product[]> {
    //console.log(theCategoryId);
    const url = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;
    return this.httpClient.get<GetResponseProducts>(url).pipe(
    map(response => response._embedded.products)
    );
  }
  searchProducts(theKeyword: string): Observable<Product[]> {
    // need to build URL based on the keyword
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;
    return this.httpClient.get<GetResponseProducts>(searchUrl)
    .pipe(
    map(response => response._embedded.products));
  }

  getProduct(theProductId: number): Observable<Product> {
    // need to build URL based on product id
    const productUrl = `${this.baseUrl}/${theProductId}`;
    return this.httpClient.get<Product>(productUrl);
    }
  getProductListPaginate(thePage: number,
    thePageSize: number,
    theCategoryId: number): Observable<GetResponseProducts> {
    const url = `${this.baseUrl}/search/findByCategoryId`
    + `?id=${theCategoryId}&page=${thePage}&size=${thePageSize}`;
    return this.httpClient.get<GetResponseProducts>(url);
    }

  }
  interface GetResponseProducts {
      _embedded: {
      products: Product[];
      },
      page: {
        size: number,
        totalElements: number,
        totalPages: number,
        number: number
        }
    }


