import { get } from './request';

export const getTweetsForSymbol = symbol =>
  get(`/symbols/${symbol}`);

export const getLiveTweets = symbols =>
  Promise.all(symbols.map(getTweetsForSymbol));
