export const sortTweets = tweets =>
  tweets.sort((a, b) => b.id - a.id);

export const deleteTweets = (tweets, symbolToDelete, otherSymbols) => {
  return tweets.filter(({ symbols: tweetSymbols }) => {
    const normalizedTweetSymbols = tweetSymbols.map(({ symbol: tweetSymbol }) => tweetSymbol);
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
    if(!oldTweetIds.includes(tweet.id)) nonDuplicateTweets.push(tweet);
    return nonDuplicateTweets;
  }, oldTweets);
};
