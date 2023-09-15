import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttons = options.map(option => {
    return (
      <button
        className="button btn"
        onClick={onLeaveFeedback}
        key={option}
        name={option}
      >
        {option.toUpperCase()}
      </button>
    );
  });

  return <div className="buttons-container">{buttons}</div>;
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
