import React from 'react';
import PropTypes from 'prop-types';

import { SymbolsItem, DeleteSymbol, StyledContent } from './StyledSymbols';


const Symbol = ({ symbol, handleDelete }) => {
    
  return (
    <SymbolsItem>
      <StyledContent>{symbol}</StyledContent>
      <DeleteSymbol handleDelete={handleDelete} />
    </SymbolsItem>
  );
  
};

Symbol.propTypes = {
  symbol: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Symbol;
