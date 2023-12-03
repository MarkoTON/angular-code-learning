import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsRoutingModule } from './products/products-routing.module';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductsRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
