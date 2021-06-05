import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  private baseUrl = 'http://localhost:8083/api/v1';
  constructor (private http: HttpClient){}
  getOrdersByCustomerId(customerId:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/orderbycustomerId/${customerId}`);
  }
 
  getOrdersByDate(date:Date):Observable<any>{
    return this.http.get(`${this.baseUrl}/orderbydate/${date}`);
  }

  getOrdersByLocation(location:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/orderbylocation/${location}`);
  }
  getAllOrders():Observable<any>{
    return this.http.get(`${this.baseUrl}/allorders`);
  }

}


