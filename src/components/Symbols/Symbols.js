import React from 'react';
import PropTypes from 'prop-types';
// import Symbol from './Symbol';

const Symbols = ({ symbols }) => {
  const listOfSymbols = symbols.map((symbol, i) => {
    // return <Symbol key={i} symbol={symbol} />;
    return (
      <li key={i}>
        {symbol.toUpperCase()}
      </li>
    );
  });

  return (
    <ul>
      {listOfSymbols}
    </ul>
  );
};

Symbols.propTypes = {
  symbols: PropTypes.arrayOf(
    PropTypes.string,
  )
};

export default Symbols;
