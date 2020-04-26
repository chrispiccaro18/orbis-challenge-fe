import React from 'react';
import PropTypes from 'prop-types';
import StyledForm from './StyledForm';
import SymbolInput from './SymbolInput';
import { IconButton } from '@material-ui/core';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import { get } from '../../services/request';

const SymbolForm = ({
  symbols,
  symbol,
  setSymbols,
  setSymbol,
}) => {
  const handleChange = event => {
    setSymbol(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if(symbol && !symbols.includes(symbol.toUpperCase())) {
      // setIsLoading(true);
      // get(`/symbols/${symbol}`)
      //   .then(symbolResponse => {
      //     setTweets(symbolResponse.messages);
      //     setIsLoading(false);
      //   });
      setSymbols([...symbols, symbol.toUpperCase()]);
      setSymbol('');
    } 
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete='off'>
      <SymbolInput handleChange={handleChange} symbol={symbol} />
      <IconButton type='submit' aria-label='add'>
        <AddCircleOutlineRoundedIcon fontSize='large' color='primary' />
      </IconButton>
    </StyledForm>
  );
};

SymbolForm.propTypes = {
  symbols: PropTypes.array,
  symbol: PropTypes.string,
  setSymbols: PropTypes.func.isRequired,
  setSymbol: PropTypes.func.isRequired,
};

export default SymbolForm;
