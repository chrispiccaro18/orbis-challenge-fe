export const sortTweets = tweets =>
  tweets.sort((a, b) => b.id - a.id);

const normalizeTweetSymbols = tweetSymbols => tweetSymbols.map(({ symbol: tweetSymbol }) => tweetSymbol);

export const deleteTweets = (tweets, symbolToDelete, otherSymbols) => {
  return tweets.filter(({ symbols: tweetSymbols }) => {
    const normalizedTweetSymbols = normalizeTweetSymbols(tweetSymbols);
    const hasSymbolToDelete = normalizedTweetSymbols.includes(symbolToDelete);
    
    if(!hasSymbolToDelete) return true;

    const hasOtherSymbols = otherSymbols.reduce((lastHadSymbol, symbol) => {
      if(lastHadSymbol) return lastHadSymbol;
      return normalizedTweetSymbols.includes(symbol);
    }, false);
    return hasOtherSymbols;
  });
};

export const preventDuplicateTweets = (newTweets, oldTweets) => {
  const oldTweetIds = oldTweets.map(({ id }) => id);
  return newTweets.reduce((nonDuplicateTweets, tweet) => {
    if(!oldTweetIds.includes(tweet.id)) return [...nonDuplicateTweets, tweet];
    return nonDuplicateTweets;
  }, oldTweets);
};

export const countOfTweetsWithSymbol = (tweets, symbol) => {
  let count = 0;
  for(let i = 0; i < tweets.length; i++) {
    const normalizedTweetSymbols = normalizeTweetSymbols(tweets[i].symbols);
    if(normalizedTweetSymbols.includes(symbol)) count++;
  }
  return count;
};
