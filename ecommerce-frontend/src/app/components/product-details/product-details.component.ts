import { Product } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  product : Product;
  constructor(private productService : ProductService,
                private route: ActivatedRoute
                ){
  }
  ngOnInit(){
    const theProductId: number = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(theProductId).subscribe(
    data => {
    this.product = data;
}
)
  }

}
