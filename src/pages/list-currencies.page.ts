import { Component, OnInit } from '@angular/core';

import { CryptoCurrency } from '../models/CryptoCurrency';

import { mockCurrencies } from '../data/mock_currencies';

import { CoinMarketCapService } from '../services/CoinMarketCap';

@Component({
  styleUrls: [ './list-currencies.page.css' ],
  templateUrl: './list-currencies.page.html'
})
export class ListCurrenciesPage implements OnInit {
  public currencies: Array<CryptoCurrency> = [];
  public filteredCurrencies: Array<CryptoCurrency> = [];
  public searchValue: string;
  public selectedConvertCurrency = '';
  public convertCurrencyOptions = [
    { label: 'Dollar', value: '' },
    { label: 'Euro', value: 'EUR' },
    { label: 'Pounds', value: 'GBP' },
  ];

  constructor (
    private coinMarketCapService: CoinMarketCapService,
  ) {}

  ngOnInit () {
    this.updateTopList();
  }

  updateTopList () {
    this.coinMarketCapService.getTop({ convert: this.selectedConvertCurrency })
      .then(currencies => {
        this.currencies = currencies;
        this.filteredCurrencies = [...currencies];
      })
    ;
  }

  onSearchValueChange () {
    this.filteredCurrencies = this.currencies.filter(c => (
      c.name.toLocaleLowerCase().indexOf(this.searchValue.toLocaleLowerCase()) >= 0
    ));
  }
}
