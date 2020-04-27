import React from 'react';
import PropTypes from 'prop-types';
import StyledForm from './StyledForm';
import SymbolInput from './SymbolInput';
import { IconButton } from '@material-ui/core';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import { getTweetsForSymbol } from '../../services/backEndApi';
import { sortTweets, preventDuplicateTweets } from '../../utils/tweetUtils';

const SymbolForm = ({
  symbols,
  symbol,
  tweets,
  setSymbols,
  setSymbol,
  setTweets,
  setIsLoading,
}) => {
  const handleChange = event => {
    setSymbol(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const normalizedSymbol = symbol.toUpperCase();
    
    if(symbol && !symbols.includes(normalizedSymbol)) {
      setIsLoading(true);
      getTweetsForSymbol(normalizedSymbol)
        .then(newTweets => {
          const unsortedTweets = preventDuplicateTweets(newTweets, tweets);
          const sortedTweets = sortTweets(unsortedTweets);
          setTweets(sortedTweets);

          setSymbols([...symbols, normalizedSymbol]);
        })
        .catch(e => {
          if(e === 'Unable to fetch.') {
            window.alert(`Oops! Something went wrong. Make sure ${normalizedSymbol} is a valid symbol.`);
          }
        });
    } 
    setIsLoading(false);
    setSymbol('');
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete='off'>
      <SymbolInput handleChange={handleChange} symbol={symbol} />
      <div className='button-container'>
        <IconButton type='submit' aria-label='add'>
          <AddCircleOutlineRoundedIcon fontSize='large' color='primary' />
        </IconButton>
      </div>
    </StyledForm>
  );
};

SymbolForm.propTypes = {
  symbols: PropTypes.array,
  symbol: PropTypes.string,
  tweets: PropTypes.array,
  setSymbols: PropTypes.func.isRequired,
  setSymbol: PropTypes.func.isRequired,
  setTweets: PropTypes.func.isRequired,
  setIsLoading: PropTypes.func.isRequired,
};

export default SymbolForm;
