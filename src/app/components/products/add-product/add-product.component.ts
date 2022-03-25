import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from '../../../models/i-product';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;
  name: FormControl;
  price: FormControl;
  quantity: FormControl;
  img: FormControl;
  categoryId: FormControl;
  selectedFile: File;
  onFileChanged(event:any) {
    this.selectedFile = event.target.files[0]
  }
    
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

  constructor(private productsService:ProductsService,private router:Router) {
    this.initFormControl();
    this.createForm();
  }

  newProduct:IProduct = {} as IProduct;

  ngOnInit(): void {
  }

  onSubmit() {

  //   const uploadData = new FormData();
  // uploadData.append('img', this.selectedFile, this.selectedFile.name);
   
  //   this.productForm.value.img =  this.selectedFile;    

  //   console.log(this.productForm.value);
    // console.log(this.selectedFile);
    

    const uploadData = new FormData();
    uploadData.append('name',this.productForm.get('name')?.value);
    uploadData.append('price',this.productForm.get('price')?.value);
    uploadData.append('quantity',this.productForm.get('quantity')?.value);
    uploadData.append('img',this.productForm.get('img')?.value);
    uploadData.append('categoryId',this.productForm.get('categoryId')?.value);

   
    
    

    const observer = {
      next: (newProduct:any)=>{
           alert("Product Add Successfult");    
           this.router.navigate(['/products']);
       },
       error: (err:Error)=>console.log(err.message)
    }
    
     this.productsService.addProduct(uploadData).subscribe(observer);
  }

}
