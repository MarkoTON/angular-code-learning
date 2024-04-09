import { Component } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CartService } from 'src/app/products/service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  cartItems$: Observable<any[]> = this.cartService.cartItems$;
  dataSource!: number;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.cartItems$.pipe(takeUntil(this.destroy$)).subscribe(items => {
      console.log(items);
      this.dataSource = items.length
    });
  }

  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }
}
