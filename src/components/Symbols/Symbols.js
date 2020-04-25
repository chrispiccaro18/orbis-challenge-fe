import React from 'react';
import PropTypes from 'prop-types';
import { SymbolsList } from './StyledSymbols';
import Symbol from './Symbol';

const Symbols = ({ symbols, setSymbols }) => {
  const handleDelete = (symbols, setSymbols, symbolToDelete) => {
    const indexToDelete = symbols.findIndex(symbol => symbol === symbolToDelete);
    setSymbols([...symbols.slice(0, indexToDelete), ...symbols.slice(indexToDelete + 1)]);
  };

  const listOfSymbols = symbols.map((symbol, i) => {
    return <Symbol
      key={i}
      symbol={symbol}
      handleDelete={() => handleDelete(symbols, setSymbols, symbol)}
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
  setSymbols: PropTypes.func.isRequired,
};

export default Symbols;
