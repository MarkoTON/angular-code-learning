import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Product } from '../../product';
@Component({
  selector: 'app-products-list-page',
  templateUrl: './products-list-page.component.html',
  styleUrls: ['./products-list-page.component.scss']
})
export class ProductsListPageComponent {
  products: Product[] = [];

  constructor(private productsHttp: ProductsService){
  }

  ngOnInit(): void {
    console.log(this.productsHttp.getAll())
    this.productsHttp.getAll().subscribe((data)=> {
      console.log(data);
      this.products = data.products;
      console.log(this.products)
    })
  }
}
