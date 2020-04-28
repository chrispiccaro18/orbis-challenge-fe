import React from 'react';
import PropTypes from 'prop-types';
import { SymbolsItem, DeleteSymbol, StyledContent } from './StyledSymbols';

const Symbol = ({ symbol, numberOfTweets, handleDelete }) => {
  return (
    <SymbolsItem>
      <div className='number-of-tweets'>
        <p>{numberOfTweets}</p>
      </div>
      <StyledContent>{symbol}</StyledContent>
      <DeleteSymbol handleDelete={handleDelete} />
    </SymbolsItem>
  );
  
};

Symbol.propTypes = {
  symbol: PropTypes.string.isRequired,
  numberOfTweets: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Symbol;
