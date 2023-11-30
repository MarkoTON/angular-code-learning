import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';
import { ProductsFilterComponent } from './components/products-filter/products-filter.component';
import { ProductsRoutingModule } from './product-route.module';



@NgModule({
  declarations: [ProductsPageComponent, ProductsListPageComponent, ProductsFilterComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
