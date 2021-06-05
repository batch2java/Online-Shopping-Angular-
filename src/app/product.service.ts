import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8083/api/v1';
  constructor(private http: HttpClient) { }
  getProductList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getallproduct`);
  }
  removeProductById(id:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteproductById/${id}`);
  }
  createProduct(product: Product): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/createproduct`, product);
  }
  editProduct(product: Product): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateproduct`, product);
  }
  getproductById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getproductById/${id}`);
  }
  
  getProductByName(pname: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getproductByName/${pname}`);
  }
  getProductsByCategory(category:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getproductByCategory/${category}`);
  }
  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getallproduct`);
  }
  
}