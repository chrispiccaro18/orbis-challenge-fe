import React from 'react';
import PropTypes from 'prop-types';

const Tweet = ({ tweet }) => {
  const {
    body,
    user,
  } = tweet;

  const {
    username,
  } = user;

  return (
    <li>
      <h2>{username}</h2>
      <p>{body}</p>
    </li>
  );
};

Tweet.propTypes = {
  tweet: PropTypes.objectOf({
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

export default Tweet;
