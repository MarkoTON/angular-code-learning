import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch: 'full'},
  // {path:'home', component: HomeComponent},
  // {path:'about/:id', component: AboutComponent},
  // {path:'edit/:id', component: EditComponent},
  // {path:'add-user', component: AddUserComponent},
  // {path:'**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
