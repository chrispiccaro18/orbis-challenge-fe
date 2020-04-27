import { get } from './request';

export const getTweetsForSymbol = symbol => {
  return get(`/symbols/${symbol}`);
};

export const getLiveTweets = symbols => {
  return Promise.all(symbols.map(symbol => get(`/symbols/${symbol}`)));
};
