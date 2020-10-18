import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailProductsComponent } from './products/detail-products/detail-products.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductoListComponent } from './products/producto-list/producto-list.component';


const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'products',component:ProductoListComponent},
  {path:'products/:id',component:DetailProductsComponent},
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
