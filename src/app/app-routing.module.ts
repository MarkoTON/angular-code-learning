import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';
import { ProductsRoutingModule } from './products/product-route.module';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch: 'full'},
  {path:'products/:id', component: ProductsPageComponent},
  // {path:'edit/:id', component: EditComponent},
  // {path:'add-user', component: AddUserComponent},
  // {path:'**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductsRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
