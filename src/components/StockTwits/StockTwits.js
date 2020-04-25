import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { get } from '../../services/request';
import Tweets from '../Tweets/Tweets';
import SymbolInput from '../SymbolInput/SymbolInput';
import CenteredDiv from './StyledStockTwits';
import { IconButton } from '@material-ui/core';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';

const StockTwits = () => {
  const [symbol, setSymbol] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [tweets, setTweets] = useState(null);

  const handleChange = event => {
    setSymbol(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if(symbol) {
      setIsLoading(true);
      get(`/symbols/${symbol}`)
        .then(symbolResponse => {
          setTweets(symbolResponse.messages);
          setIsLoading(false);
        });
    }
  };

  return (
    <CenteredDiv>
      <h1>Orbis Challenge</h1>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <SymbolInput handleChange={handleChange} symbol={symbol} />
        <IconButton type='submit' aria-label='add'>
          <AddCircleOutlineRoundedIcon color='primary' />
        </IconButton>
      </form>
      {tweets &&
        <Tweets tweets={tweets} />
      }
      {isLoading && <h2>Loading</h2>}
    </CenteredDiv>
  );
};

export default StockTwits;
