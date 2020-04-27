import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const SymbolInput = ({ handleChange, symbolInput }) => {
  return (
    <TextField
      type='search'
      label="Enter Symbol"
      variant="outlined"
      value={symbolInput} onChange={handleChange}
    />
  );
};

SymbolInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  symbolInput: PropTypes.string,
};

export default SymbolInput;
