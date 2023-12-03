import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

const ProductsRoutes: Routes = [
  { path: '', component: ProductsListPageComponent },
  { path: ':id', component: ProductPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(ProductsRoutes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule { }
