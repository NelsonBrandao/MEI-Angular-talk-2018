import { Component, OnInit, Input } from '@angular/core';

import { CryptoCurrency } from '../../models/CryptoCurrency'

@Component({
  selector: 'currency-card',
  styleUrls: [ './currency-card.component.css' ],
  templateUrl: './currency-card.component.html'
})
export class CurrencyCardComponent implements OnInit {
  @Input() currency: CryptoCurrency;
  @Input() convertCurrency: string;

  constructor () {}

  ngOnInit () {}

  openCoinMarketCap (id: string) {
    window.open(`https://coinmarketcap.com/currencies/${id}/`)
  }
}
