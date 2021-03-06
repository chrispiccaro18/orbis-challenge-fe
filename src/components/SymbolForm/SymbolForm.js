import React from 'react';
import PropTypes from 'prop-types';
import StyledForm from './StyledForm';
import SymbolInput from './SymbolInput';
import { IconButton } from '@material-ui/core';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import { getLiveTweets } from '../../services/backEndApi';
import { sortTweets, preventDuplicateTweets } from '../../utils/tweetUtils';
import { normalizeSymbolInput, validSymbolRegex } from '../../utils/strings';

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
      if(!validSymbolRegex.test(symbol)) {
        window.alert('Only letters, \'.\', and \'-\' are valid in symbols.');
        return false;
      }
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
      .then(() => {
        setSymbolInput('');
        setSymbols([...symbols, ...newSymbols]);
      })
      .catch(() => {
        window.alert('Oops! There was an error. Check to see if the symbols you input were correct.');
      })
      .finally(() => {
        setIsLoading(false);
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
