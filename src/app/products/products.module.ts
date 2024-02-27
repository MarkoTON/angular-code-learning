import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';
import { ProductsFilterComponent } from './components/products-filter/products-filter.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductsService } from './service/products.service';
import { ProductListItemComponent } from './pages/product-list-item/product-list-item.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ProductItemListComponent } from './components/product-item-list/product-item-list.component';

@NgModule({
  declarations: [ProductPageComponent, ProductsListPageComponent, ProductsFilterComponent, ProductListItemComponent, CartPageComponent, ProductItemListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ],
  providers:[ProductsService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProductsModule { }
