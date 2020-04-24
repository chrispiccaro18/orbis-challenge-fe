import React from 'react';
import PropTypes from 'prop-types';
import Tweet from '../Tweet/Tweet';

const Tweets = ({ tweets }) => {
  const listOfTweets = tweets.map(tweet => {
    return <Tweet key={tweet.id} tweet={tweet} />;
  });

  return (
    <ul>
      {listOfTweets}
    </ul>
  );
};

Tweets.propTypes = {
  tweets: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    user: PropTypes.objectOf({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
      like_count: PropTypes.number.isRequired,
    })
  })
};

export default Tweets;
