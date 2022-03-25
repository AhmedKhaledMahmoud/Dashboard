import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from '../../../models/i-category';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  currentId: number;
  currentCategory: ICategory | null;
  categoryForm: FormGroup;
  name: FormControl;
    
   initFormControl() {
    this.name = new FormControl('');
  }

  createForm() {
    this.categoryForm = new FormGroup({
      name: this.name, 
    });
  }

  constructor(private categoriesService:CategoriesService,private router:Router,private activatedRoute: ActivatedRoute) {
    this.initFormControl();
    this.createForm();
  }



  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((arg) => {
      this.currentId = Number(arg.get('id'));
      this.categoriesService.getCategoryById(this.currentId).subscribe((category)=>{this.currentCategory = category});
    });
  }

  onSubmit() {
    const observer = {
      next: (newCategory:ICategory)=>{
           alert("Category Add Successfult");    
           this.router.navigate(['/categories']);
       },
       error: (err:Error)=>console.log(err.message)
    }
    
     this.categoriesService.updateCategory(this.currentId,this.categoryForm.value).subscribe(observer);
  }

}
