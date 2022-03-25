import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../models/i-product';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productListOfCategory: IProduct[];

  currentId: number;
  currentProduct: IProduct | null;
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe((arg) => {
      this.currentId = Number(arg.get('id'));
      this.productsService.getProductById(this.currentId).subscribe((product)=>{this.currentProduct = product});
    });
  }

  goBack() {
    this.location.back();
  }

}
