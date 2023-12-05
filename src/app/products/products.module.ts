import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';
import { ProductsFilterComponent } from './components/products-filter/products-filter.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductPageComponent, ProductsListPageComponent, ProductsFilterComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
