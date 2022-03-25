import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { UpdateCategoryComponent } from './components/categories/update-category/update-category.component';
import { HomeComponent } from './components/home/home.component';
import { OrderDetailsComponent } from './components/orders/order-details/order-details.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'products/add', component: AddProductComponent },
  { path: 'products/:id/edit', component: UpdateCategoryComponent },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
  },
  { path: 'products', component: ProductsComponent },
  {
    path: 'orders/:id',
    component: OrderDetailsComponent,
  },
  { path: 'orders', component: OrdersComponent },

  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/add', component: AddCategoryComponent },
  {
    path: 'categories/:id/edit',
    component: UpdateCategoryComponent,
  },
  { path: 'categories', component: CategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
