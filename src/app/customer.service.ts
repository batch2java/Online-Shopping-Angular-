import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  CartItem } from 'src/app/cartItem';
import { Customer } from './customer';
import { Order } from './order';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  getCustomers(id: number) {
    throw new Error('Method not implemented.');
  }

  private baseUrl = 'http://localhost:8083/api/v1';
  //allCustomer: any=[];
  cartitem:CartItem= new CartItem();
  constructor(private http: HttpClient) { }


  addCustomer(customer: Customer){
    return this.http.post(`${this.baseUrl}/createcustomer`,customer);
  }

  updateCustomer(customer: Customer) : Observable<any> {
    return this.http.put(`${this.baseUrl}/updatecustomer`,customer);
  }

  removeCustomer(id:number) : Observable<any>{
    return this.http.delete(`${this.baseUrl}/deletecustomerById/`+id);
  }
  
  userLogin(email:string,password:string) : Observable<any>{
    return this.http.get(`${this.baseUrl}/customervalidate/${email}/${password}`);

  }

   getCustomerById(id:number) : Observable<any>{
    return this.http.get(`${this.baseUrl}/getcustomerById/`+id);
  }
  addCart(cartItem:CartItem): Observable<any> {
    
    return this.http.post(`${this.baseUrl}/addcart`,cartItem);
  }
  getCartProductsById(id:number) : Observable<any>{
    return this.http.get(`${this.baseUrl}/getcartproducts/`+id);
  }
  addOrder(order : Order): Observable<any>{
    return this.http.post(`${this.baseUrl}/addorder`,order);
  }
  deleteProductByCartId(productId: number ,cartId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deletecart/${productId}/${cartId}`);
  }
  getOrderDetails(id:number) : Observable<any>{
    return this.http.get(`${this.baseUrl}/orderbycustomerid/`+id);
  }
  cancelOrder(orderId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/orderbyid/${orderId}`);
}
getCustomerByLocation(location:string):Observable<any>{
  return this.http.get(`${this.baseUrl}/getallcustomer/${location}`);
}

getAllCustomer():Observable<any>{
  return this.http.get(`${this.baseUrl}/allcustomers`);
}

}