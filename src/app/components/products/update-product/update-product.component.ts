import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../../models/i-product';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  currentId: number;
  currentProduct: IProduct | null;
  productForm: FormGroup;
  name: FormControl;
  price: FormControl;
  quantity: FormControl;
  img: FormControl;
  categoryId: FormControl;
    
   initFormControl() {
    this.name = new FormControl('');
    this.price = new FormControl('');
    this.quantity = new FormControl('');
    this.img = new FormControl('');
    this.categoryId = new FormControl('');
  }

  createForm() {
    this.productForm = new FormGroup({
      name: this.name, 
      price: this.price, 
      quantity: this.quantity, 
      img: this.img, 
      categoryId:this.categoryId
    });
  }

  constructor(private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,private router:Router) {
      this.initFormControl();
    this.createForm();
     }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((arg) => {
      this.currentId = Number(arg.get('id'));
      this.productsService.getProductById(this.currentId).subscribe((product)=>{this.currentProduct = product});
    });
  }

  onSubmit() {
    const observer = {
      next: (currentProduct:IProduct)=>{
           alert("Product Add Successfult");    
           this.router.navigate(['/products']);
       },
       error: (err:Error)=>console.log(err.message)
    }
    
     this.productsService.updateProduct(this.currentId,this.productForm.value).subscribe(observer);
  }

}
