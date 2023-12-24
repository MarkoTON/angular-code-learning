import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import { Product } from '../../product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  id!: string;
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.productsService.getProduct(this.id).subscribe((res) => {
      console.log(res);
      this.product = res;
    });
  }
}
