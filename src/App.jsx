import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import React from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() === 0
      ? 0
      : Math.ceil((this.state.good / this.countTotalFeedback()) * 100);
  };

  handleButtonClick = e => {
    this.setState(prev => ({
      [e.target.name]: prev[e.target.name] + 1,
    }));
  };

  render() {
    const totalFeedbacks = this.countTotalFeedback();
    return (
      <div className="content-wrapper">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleButtonClick}
          />
        </Section>
        <Section title="Statistics" total={this.countTotalFeedback}>
          {totalFeedbacks > 0 ? (
            <Statistics
              data={this.state}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
