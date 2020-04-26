import React from 'react';
import PropTypes from 'prop-types';
import StyledTweets from './StyledTweets';
import Tweet from './Tweet';

const Tweets = ({ tweets }) => {
  const listOfTweets = tweets.map(tweet => {
    return <Tweet key={tweet.id} tweet={tweet} />;
  });

  return (
    <StyledTweets>
      {listOfTweets}
    </StyledTweets>
  );
};

Tweets.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      body: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
        like_count: PropTypes.number.isRequired,
      })
    })
  )
};

export default Tweets;
