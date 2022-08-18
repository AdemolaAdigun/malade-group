import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { InvestmentComponent } from './page/investment/investment.component';
import { AgricultureComponent } from './page/agriculture/agriculture.component';
import { BuildingComponent } from './page/building/building.component';
import { TradingComponent } from './page/trading/trading.component';
import { AirComponent } from './page/air/air.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    InvestmentComponent,
    AgricultureComponent,
    BuildingComponent,
    TradingComponent,
    AirComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
