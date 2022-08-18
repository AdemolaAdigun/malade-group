import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/page/home/home.component';
import { AboutUsComponent } from '../app/page/about-us/about-us.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';
import { AgricultureComponent } from './page/agriculture/agriculture.component';
import { AirComponent } from './page/air/air.component';
import { BuildingComponent } from './page/building/building.component';
import { InvestmentComponent } from './page/investment/investment.component';
import { TradingComponent } from './page/trading/trading.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'agriculture', component: AgricultureComponent},
  {path: 'air', component: AirComponent},
  {path: 'building', component: BuildingComponent},
  {path: 'investment', component: InvestmentComponent},
  {path: 'trading', component: TradingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
