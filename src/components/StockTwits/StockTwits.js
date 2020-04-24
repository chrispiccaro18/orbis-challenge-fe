import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { get } from '../../services/request';
import Tweets from '../Tweets/Tweets';

const StockTwits = () => {
  const [symbol, setSymbol] = useState(null);
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
    <>
      <h1>Orbis Challenge</h1>
      <form onSubmit={handleSubmit}>
        <label>
          {'Enter Symbol'}
          <input value={symbol} onChange={handleChange} />
        </label>
        <button>Search</button>
      </form>
      {tweets &&
        <Tweets tweets={tweets} />
      }
      {isLoading && <h2>Loading</h2>}
    </>
  );
};

export default StockTwits;
