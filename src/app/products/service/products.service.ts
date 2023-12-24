import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductsResponse } from '../product';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<ProductsResponse> {
    const apiUrl = `https://dummyjson.com/products`;
    return this.http.get<ProductsResponse>(apiUrl);
  }

  getProduct(product: string): Observable<Product> {
    const apiUrl = `https://dummyjson.com/products/${product}`;
    return this.http.get<Product>(apiUrl);
  }
}
