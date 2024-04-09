import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<Product[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {
    console.log('Constructor has been called',this.cartItemsSubject);
  }

  addToCart(product: any) {
    console.log('This is called from cart service');
    const currentItems = this.cartItemsSubject.getValue();
    const updatedItems = [...currentItems, product];
    this.cartItemsSubject.next(updatedItems);
  }
}
