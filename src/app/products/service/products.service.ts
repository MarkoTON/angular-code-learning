import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsResponse } from '../product';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<ProductsResponse> {
    const apiUrl = `https://dummyjson.com/products`;
    let products = this.http.get(apiUrl)
    console.log(products);
    return this.http.get<ProductsResponse>(apiUrl);
  }
}
