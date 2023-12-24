import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  id!:number;
  product: Object = [];
  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.productsService.getProduct(String(this.id)).subscribe((res)=>{
      this.product = res;
    })
  }
}
