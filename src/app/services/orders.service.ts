import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient:HttpClient) { }

  getAllProducts():Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/orders`);
  }

  getOrderById(orderId:number):Observable<any>{
    return this.httpClient.get<any>(`${environment.apiUrl}/orders/${orderId}`);
  }
}
