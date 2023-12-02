import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: 'carrello', component: CartComponent },
  { path: 'Products', component: ProductsComponent },
  { path: '', redirectTo: '/Products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
