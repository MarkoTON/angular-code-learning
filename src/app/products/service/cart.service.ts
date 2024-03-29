import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() { }

  addToCart(product: any) {
    const currentItems = this.cartItemsSubject.getValue();
    const updatedItems = [...currentItems, product];
    this.cartItemsSubject.next(updatedItems);
  }
}
