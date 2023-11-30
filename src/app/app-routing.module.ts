import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsListPageComponent } from './products/pages/products-list-page/products-list-page.component';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch: 'full'},
  {path:'products', component: ProductsListPageComponent},
  {path:'products/:id', component: ProductsPageComponent},
  // {path:'edit/:id', component: EditComponent},
  // {path:'add-user', component: AddUserComponent},
  // {path:'**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
