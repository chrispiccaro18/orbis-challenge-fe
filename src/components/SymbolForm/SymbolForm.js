import React from 'react';
import PropTypes from 'prop-types';
import StyledForm from './StyledForm';
import SymbolInput from './SymbolInput';
import { IconButton } from '@material-ui/core';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import { getLiveTweets } from '../../services/backEndApi';
import { sortTweets, preventDuplicateTweets } from '../../utils/tweetUtils';
import { normalizeSymbolInput } from '../../utils/strings';

const SymbolForm = ({
  symbols,
  symbolInput,
  tweets,
  setSymbols,
  setSymbolInput,
  setTweets,
  setIsLoading,
}) => {
  const handleChange = event => {
    setSymbolInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newSymbolsSet = new Set(normalizeSymbolInput(symbolInput));
    
    const newSymbols = [...newSymbolsSet].filter(symbol => {
      return symbol && !symbols.includes(symbol);
    });
    
    setIsLoading(true);
    getLiveTweets(newSymbols)
      .then(tweetArrays => {
        const unsortedTweets = tweetArrays.reduce((oldTweets, newTweets) => {
          return preventDuplicateTweets(newTweets, oldTweets);
        }, []);
        const sortedTweets = sortTweets([...tweets, ...unsortedTweets]);
        setTweets(sortedTweets);
      })
      .catch(e => {
        console.error(e);
      })
      .finally(() => {
        setSymbols([...symbols, ...newSymbols]);
        setIsLoading(false);
        setSymbolInput('');
      });
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete='off'>
      <SymbolInput handleChange={handleChange} symbolInput={symbolInput} />
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
  symbolInput: PropTypes.string,
  tweets: PropTypes.array,
  setSymbols: PropTypes.func.isRequired,
  setSymbolInput: PropTypes.func.isRequired,
  setTweets: PropTypes.func.isRequired,
  setIsLoading: PropTypes.func.isRequired,
};

export default SymbolForm;
