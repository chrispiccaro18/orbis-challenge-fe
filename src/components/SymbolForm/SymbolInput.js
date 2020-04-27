import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const SymbolInput = ({ handleChange, symbol }) => {
  return (
    <TextField
      type='search'
      label="Enter Symbol"
      variant="outlined"
      value={symbol} onChange={handleChange}
    />
  );
};

SymbolInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  symbol: PropTypes.string,
};

export default SymbolInput;
