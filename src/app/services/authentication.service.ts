import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IUser } from '../models/i-user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  httpOption;

  constructor(private httpClient:HttpClient) {
    this.httpOption={
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // Authorization: 'my-auth-token'
      })
    };
   }


   userLogin(user: IUser):Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.apiUrl}/login`,JSON.stringify(user),this.httpOption)
  }

  userRegister(user: IUser):Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.apiUrl}/user`,JSON.stringify(user),this.httpOption)
  }
}
