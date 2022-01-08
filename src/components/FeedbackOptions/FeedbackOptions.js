import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { List, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => (
        <li key={nanoid()}>
          <Button type="button" name={option} onClick={onLeaveFeedback}>
            {option}
          </Button>
        </li>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
