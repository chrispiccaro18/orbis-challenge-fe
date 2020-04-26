import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Tweets from '../Tweets/Tweets';
import Symbols from '../Symbols/Symbols';
import CenteredDiv from './CenteredDiv';
import OrbisLogo from '../../../assets/OrbisLogo';
import SymbolForm from '../SymbolForm/SymbolForm';

const StockTwits = () => {
  const [symbol, setSymbol] = useState('');
  const [symbols, setSymbols] = useState(['AAPL']);
  const [isLoading, setIsLoading] = useState(false);
  const [tweets, setTweets] = useState([]);

  const isSymbols = symbols.length > 0;

  return (
    <CenteredDiv>
      <OrbisLogo />
      <h1>Orbis Challenge</h1>
      <SymbolForm
        symbols={symbols}
        symbol={symbol}
        setSymbols={setSymbols}
        setSymbol={setSymbol}
        setTweets={setTweets}
      />
      {isSymbols &&
        <Symbols symbols={symbols} setSymbols={setSymbols} />
      }
      {tweets &&
        <Tweets tweets={tweets} setTweets={setTweets} />
      }
      {isLoading && <h2>Loading</h2>}
    </CenteredDiv>
  );
};

export default StockTwits;
