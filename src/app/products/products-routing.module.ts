import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

const ProductsRoutes: Routes = [
  { path: 'products', component: ProductsListPageComponent },
  { path: 'products/:id', component: ProductsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(ProductsRoutes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule { }
