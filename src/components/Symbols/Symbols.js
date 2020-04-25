import React from 'react';
import PropTypes from 'prop-types';
import { SymbolsList, SymbolsItem, DeleteSymbol, StyledContent } from './StyledSymbols';
// import Symbol from './Symbol';

const Symbols = ({ symbols }) => {
  const listOfSymbols = symbols.map((symbol, i) => {
    // return <Symbol key={i} symbol={symbol} />;
    return (
      <SymbolsItem key={i}>
        <StyledContent>{symbol}</StyledContent>
        <DeleteSymbol />
      </SymbolsItem>
    );
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
  )
};

export default Symbols;
