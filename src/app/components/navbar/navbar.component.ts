import { Component } from '@angular/core';
import { Observable, takeUntil } from 'rxjs';
import { CartService } from 'src/app/products/service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  cartItems$: Observable<any[]> = this.cartService.cartItems$;
  dataSource!: number;

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.cartItems$.subscribe(items => {
      console.log(items);
      this.dataSource = items.length
    });
  }
}
