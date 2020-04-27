import React, { useState } from 'react';
import StyledHome from './StyledHome';
import Tweets from '../Tweets';
import Symbols from '../Symbols';
import SymbolForm from '../SymbolForm';
import { getLiveTweets } from '../../services/backEndApi';
import { useInterval } from '../../hooks';
import { preventDuplicateTweets, sortTweets } from '../../utils/tweetUtils';

const Home = () => {
  const [symbolInput, setSymbolInput] = useState('');
  const [symbols, setSymbols] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tweets, setTweets] = useState([]);

  const isSymbols = symbols.length > 0;

  useInterval(() => {
    getLiveTweets(symbols)
      .then(tweetArrays => {
        const unsortedTweets = tweetArrays.reduce((oldTweets, newTweets) => {
          return preventDuplicateTweets(newTweets, oldTweets);
        }, []);
        const sortedTweets = sortTweets(unsortedTweets);
        setTweets(sortedTweets);
      })
      .catch(e => {
        console.error(e);
      });
  }, 15000);

  return (
    <StyledHome>
      <SymbolForm
        symbols={symbols}
        symbolInput={symbolInput}
        tweets={tweets}
        setSymbols={setSymbols}
        setSymbolInput={setSymbolInput}
        setTweets={setTweets}
        setIsLoading={setIsLoading}
      />
      {isSymbols ?
        <Symbols
          symbols={symbols}
          tweets={tweets}
          setSymbols={setSymbols}
          setTweets={setTweets}
        />
        : <p className="greeting">Add a symbol to see the latest tweets.</p>
      }
      {isLoading && <h2>Loading...</h2>}
      {tweets &&
        <Tweets tweets={tweets} setTweets={setTweets} />
      }
    </StyledHome>
  );
};

export default Home;
