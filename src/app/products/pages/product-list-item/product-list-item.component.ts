import { Component, Input } from '@angular/core';
import { Product } from '../../product';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss'],
})
export class ProductListItemComponent {
  @Input({ required: true }) item!: Product;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
