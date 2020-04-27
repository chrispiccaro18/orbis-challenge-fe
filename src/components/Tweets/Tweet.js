import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
} from '@material-ui/core';
import { decodeSpecialChars } from '../../utils/strings';

const Tweet = ({ tweet }) => {
  const {
    body,
    user,
  } = tweet;

  const {
    username,
    avatar_url,
  } = user;

  return (
    <li>
      <Card variant='outlined'>
        <CardHeader
          avatar={
            <Avatar
              alt={`${username} avatar`}
              src={avatar_url} />
          }
          title={username}
        />
        <CardContent>
          <Typography>
            {decodeSpecialChars(body)}
          </Typography>
        </CardContent>
      </Card>
    </li>
  );
};

Tweet.propTypes = {
  tweet: PropTypes.shape({
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
};

export default Tweet;
