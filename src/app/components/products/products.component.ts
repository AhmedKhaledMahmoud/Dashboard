import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../../models/i-product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productListOfCategory: IProduct[];

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productsService
      .getAllProducts()
      .subscribe((products) => (this.productListOfCategory = products));
  }

  openProductDetails(productId: number) {
    this.router.navigate(['/products', productId]);
  }

  editProduct(productId: number) {
    this.router.navigate(['/products', productId,'edit']);
  }

  deleteProduct(productId: number) {
    this.productsService.deleteProduct(productId).subscribe(() => {
      this.productsService
        .getAllProducts()
        .subscribe((products) => (this.productListOfCategory = products));
    });
  }

}
