import { ProductCategoryService } from './../../services/product-category.service';
import { ProductService } from './../../services/product.service';
import { ProductCategory } from './../../common/product-category';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-left-navbar',
  templateUrl: './left-navbar.component.html',
  styleUrls: ['./left-navbar.component.css']
})
export class LeftNavbarComponent implements OnInit{
  logoUrl='assets/images/logo.png';
  productCategories: ProductCategory[];
  constructor(private productCategoryService: ProductCategoryService){

  }
  ngOnInit(){
    this.productCategoryService.getProductCategories()
    .subscribe(
      data=>{
        this.productCategories=data;
      }
    );

  }
}
