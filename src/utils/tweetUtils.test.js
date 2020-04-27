import { sortTweets, deleteTweets, preventDuplicateTweets, countOfTweetsWithSymbol } from './tweetUtils';
import { aaplMock, amdMock, sortedTweetIds, originalTweets } from './mockData';

describe('sort tweets', () => {
  it('sorts tweets by most recent', () => {
    const unsortedTweets = [...aaplMock, ...amdMock];
    const sortedTweets = sortTweets(unsortedTweets);
    expect(sortedTweets.map(tweet => tweet.id)).toEqual(sortedTweetIds);
  });

  it('deletes tweets with the symbol to be deleted', () => {
    const symbolToDelete = 'AMD';
    const otherSymbols = ['FB'];
    const results = deleteTweets(originalTweets, symbolToDelete, otherSymbols);
    expect(results.map(({ id }) => id)).toEqual([1, 4]);
  });
  
  it('does not delete tweets that contain other symbols', () => {
    const symbolToDelete = 'FB';
    const otherSymbols = ['AAPL', 'AMD'];
    const results = deleteTweets(originalTweets, symbolToDelete, otherSymbols);
    expect(results.map(({ id }) => id)).toEqual([1, 2, 3]);
  });

  it('does not add a duplicate tweet', () => {
    const newTweets = [
      {
        id: 1
      },
      {
        id: 5
      },
    ];
    const results = preventDuplicateTweets(newTweets, originalTweets);
    expect(results.map(({ id }) => id)).toEqual([1, 2, 3, 4, 5]);
  });

  it('counts the amount of tweets with a given symbol', () => {
    const symbol = 'AMD';
    const result = countOfTweetsWithSymbol(originalTweets, symbol);
    expect(result).toBe(2);
  });
});
