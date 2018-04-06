export class CryptoCurrency {
  id: string;
  name: string;
  symbol: string;
  price: number;
  market_cap: number;
  percent_change_7d: number;
  last_updated: Date;

  static deserialize (value: any): CryptoCurrency {
    const instance = new CryptoCurrency();

    instance.id = value.id;
    instance.name = value.name;
    instance.symbol = value.symbol;
    instance.price = parseFloat(value.price_eur || value.price_gbp || value.price_usd);
    instance.market_cap = parseFloat(value.market_cap_eur || value.market_cap_gbp || value.market_cap_usd);
    instance.percent_change_7d = parseFloat(value.percent_change_7d);
    instance.last_updated = new Date(0);
    instance.last_updated.setUTCSeconds(value.last_updated);

    return instance;
  }
}
