import sortTweets from './sortTweets';
import { aaplMock, amdMock, sortedTweetIds } from './mockData';

describe('sort tweets', () => {
  it('sorts tweets by most recent', () => {
    const unsortedTweets = [...aaplMock, ...amdMock];
    const sortedTweets = sortTweets(unsortedTweets);
    expect(sortedTweets.map(tweet => tweet.id)).toEqual(sortedTweetIds);
  });
});
