import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Tweets from '../Tweets/Tweets';
import Symbols from '../Symbols/Symbols';
import CenteredDiv from './CenteredDiv';
import SymbolForm from '../SymbolForm/SymbolForm';

const StockTwits = () => {
  const [symbol, setSymbol] = useState('');
  const [symbols, setSymbols] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tweets, setTweets] = useState([]);

  const isSymbols = symbols.length > 0;

  return (
    <CenteredDiv>
      <SymbolForm
        symbols={symbols}
        symbol={symbol}
        tweets={tweets}
        setSymbols={setSymbols}
        setSymbol={setSymbol}
        setTweets={setTweets}
        setIsLoading={setIsLoading}
      />
      {isSymbols &&
        <Symbols
          symbols={symbols}
          tweets={tweets}
          setSymbols={setSymbols}
          setTweets={setTweets}
        />
      }
      {isLoading && <h2>Loading</h2>}
      {tweets &&
        <Tweets tweets={tweets} setTweets={setTweets} />
      }
    </CenteredDiv>
  );
};

export default StockTwits;
