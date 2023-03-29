import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ShoppingComponent } from './component/shopping/shopping.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewSellerComponent } from './component/view-seller/view-seller.component';
import { AddVoitureComponent } from './component/add-voiture/add-voiture.component';
import { EditVoitureComponent } from './component/edit-voiture/edit-voiture.component';
import { ProfileComponent } from './component/profile/profile.component';
import { NavComponent } from './component/nav/nav.component';
import { DetailsProductsComponent } from './component/details-products/details-products.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShoppingComponent,
    RegisterComponent,
    ViewSellerComponent,
    AddVoitureComponent,
    EditVoitureComponent,
    ProfileComponent,
    NavComponent,
    DetailsProductsComponent,
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
