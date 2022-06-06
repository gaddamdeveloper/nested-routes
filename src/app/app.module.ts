import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JasonComponentComponent } from './components/jason-component/jason-component.component';
import { HttpClientModule } from '@angular/common/http';
import { AddressComponent } from './components/address/address.component';
import { CompanyComponent } from './components/company/company.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    JasonComponentComponent,
    AddressComponent,
    CompanyComponent,
    NavbarComponent,
    HomeComponent,
    FeaturesComponent,
    PricingComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
