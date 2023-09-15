import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttons = options.map(state => {
    return (
      <button
        className="button btn"
        onClick={onLeaveFeedback}
        key={state}
        name={state}
      >
        {state.toUpperCase()}
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
