import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { CurrencyCardComponent } from '../components/currency-card/currency-card.component';
import { ListCurrenciesPage } from '../pages/list-currencies.page';

import { CoinMarketCapService } from '../services/CoinMarketCap';

const appRoutes: Routes = [
  { path: '', component: ListCurrenciesPage },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  declarations: [
    AppComponent,

    CurrencyCardComponent,

    ListCurrenciesPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  entryComponents: [
    ListCurrenciesPage,
  ],
  providers: [
    CoinMarketCapService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
