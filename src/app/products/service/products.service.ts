import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    const apiUrl = `https://dummyjson.com/products`;
    return this.http.get(apiUrl);
  }
}
