import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { features } from 'process';
import { AddressComponent } from './components/address/address.component';
import { CompanyComponent } from './components/company/company.component';
import { FeaturesComponent } from './components/features/features.component';
import { HomeComponent } from './components/home/home.component';
import { JasonComponentComponent } from './components/jason-component/jason-component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'',component:NavbarComponent},
  {path:'home',component:HomeComponent},
  {path:'features',component:FeaturesComponent},
  {path:'pricing',component:PricingComponent},
  {path:'jason',component:JasonComponentComponent},
  {path:'user/:id',component:UsersComponent,
children:[
  {path: 'address',component:AddressComponent},
  {path: 'company',component:CompanyComponent}
]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
