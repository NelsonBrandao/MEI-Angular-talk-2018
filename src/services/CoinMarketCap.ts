import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { CryptoCurrency } from '../models/CryptoCurrency';

@Injectable()
export class CoinMarketCapService {
  constructor (
    private http: Http,
  ) {}

  getTop (params: Object): Promise<Array<CryptoCurrency>> {
    return this.http
      .get('https://api.coinmarketcap.com/v1/ticker/', { params })
      .toPromise()
      .then(response => response.json())
      .then(response => response.map(c => CryptoCurrency.deserialize(c)))
  }
}
