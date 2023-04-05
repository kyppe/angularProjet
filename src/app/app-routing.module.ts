import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVoitureComponent } from './component/add-voiture/add-voiture.component';
import { CartComponent } from './component/cart/cart.component';
import { DetailsProductsComponent } from './component/details-products/details-products.component';
import { EditVoitureComponent } from './component/edit-voiture/edit-voiture.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';
import { ShoppingComponent } from './component/shopping/shopping.component';
import { ViewSellerComponent } from './component/view-seller/view-seller.component';

const routes: Routes = [
  { path: 'login', title: 'login', component: LoginComponent },
  { path: 'register', title: 'register', component: RegisterComponent },
  { path: 'shopping', title: 'shopping', component: ShoppingComponent },
  {path : 'seller', title: 'seller', component: ViewSellerComponent },
  {path : 'addVoiture', title: 'addVoiture', component: AddVoitureComponent },
  {path : 'EditVoiture/:id', title: 'EditVoiture', component: EditVoitureComponent },
  {path : 'detailsProducts/:id', title: 'detailsProducts', component: DetailsProductsComponent },
  {path : 'profile', title: 'profile', component: ProfileComponent },
  {path : 'cart', title: 'cart', component: CartComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
