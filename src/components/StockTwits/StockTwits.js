import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { get } from '../../services/request';
import Tweets from '../Tweets/Tweets';
import SymbolInput from '../SymbolInput/SymbolInput';
import Symbols from '../Symbols/Symbols';
import CenteredDiv from './CenteredDiv';
import { IconButton } from '@material-ui/core';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import OrbisLogo from '../../../assets/OrbisLogo';

const StockTwits = () => {
  const [symbol, setSymbol] = useState('');
  const [symbols, setSymbols] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tweets, setTweets] = useState(null);

  const handleChange = event => {
    setSymbol(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if(symbol && !symbols.includes(symbol.toUpperCase())) {
      setIsLoading(true);
      get(`/symbols/${symbol}`)
        .then(symbolResponse => {
          setTweets(symbolResponse.messages);
          setIsLoading(false);
        });
      setSymbols([...symbols, symbol.toUpperCase()]);
      setSymbol('');
    } 
  };

  const isSymbols = symbols.length > 0;
  // console.log(isSymbols, symbols);

  return (
    <CenteredDiv>
      <OrbisLogo />
      <h1>Orbis Challenge</h1>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <SymbolInput handleChange={handleChange} symbol={symbol} />
        <IconButton type='submit' aria-label='add'>
          <AddCircleOutlineRoundedIcon color='primary' />
        </IconButton>
      </form>
      {isSymbols &&
        <Symbols symbols={symbols} setSymbols={setSymbols} />
      }
      {tweets &&
        <Tweets tweets={tweets} />
      }
      {isLoading && <h2>Loading</h2>}
    </CenteredDiv>
  );
};

export default StockTwits;
