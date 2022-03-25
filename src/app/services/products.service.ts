import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IProduct } from '../models/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpOption;

  constructor(private httpClient:HttpClient) {
    this.httpOption={
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // Authorization: 'my-auth-token'
      })
    };
   }

  getAllProducts():Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.apiUrl}/products`);
  }

  getAllProductsByCategoryId(categoryId:number):Observable<IProduct[]>  {
    return this.httpClient.get<IProduct[]>(`${environment.apiUrl}/products?categoryId=${categoryId}`);
  }

  getProductById(ProductId:number):Observable<IProduct>{
    return this.httpClient.get<IProduct>(`${environment.apiUrl}/products/${ProductId}`);
  }

  addProduct(newProduct:any):Observable<IProduct> {
    return this.httpClient
    .post<any>(`${environment.apiUrl}/products`,JSON.stringify(newProduct),this.httpOption)
  }

  updateProduct(productId:number,updateProduct:IProduct) {
    return this.httpClient
    .patch<IProduct>(`${environment.apiUrl}/products/${productId}`,JSON.stringify(updateProduct),this.httpOption)
  }

  deleteProduct(productId:number) {
    return this.httpClient
    .delete<IProduct>(`${environment.apiUrl}/products/${productId}`);
  }
}
