import React from 'react';
import PropTypes from 'prop-types';
import { SymbolsList } from './StyledSymbols';
import Symbol from './Symbol';
import { deleteTweets, countOfTweetsWithSymbol } from '../../utils/tweetUtils';

const Symbols = ({
  symbols,
  tweets,
  setSymbols,
  setTweets,
}) => {
  const handleDelete = (symbols, setSymbols, symbolToDelete, tweets, setTweets) => {
    const indexToDelete = symbols.findIndex(symbol => symbol === symbolToDelete);
    const updatedSymbols = [...symbols.slice(0, indexToDelete), ...symbols.slice(indexToDelete + 1)];
    setSymbols(updatedSymbols);

    const updatedTweets = deleteTweets(tweets, symbolToDelete, updatedSymbols);
    setTweets(updatedTweets);
  };

  const listOfSymbols = symbols.map((symbol, i) => {
    const numberOfTweets = countOfTweetsWithSymbol(tweets, symbol);
    return <Symbol
      key={i}
      symbol={symbol}
      numberOfTweets={numberOfTweets}
      handleDelete={() => handleDelete(symbols, setSymbols, symbol, tweets, setTweets)}
    />;
  });

  return (
    <SymbolsList>
      {listOfSymbols}
    </SymbolsList>
  );
};

Symbols.propTypes = {
  symbols: PropTypes.arrayOf(
    PropTypes.string,
  ),
  tweets: PropTypes.array,
  setSymbols: PropTypes.func.isRequired,
  setTweets: PropTypes.func.isRequired,
};

export default Symbols;
