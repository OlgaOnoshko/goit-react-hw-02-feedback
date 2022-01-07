import { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import Section from '../../Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = e => {
    const label = e.currentTarget.name;
    this.setState(prevState => ({ [label]: prevState[label] + 1 }));
  };

  countTotal = e => {
    const { good, neutral, bad } = this.state;
    const totalCount = good + neutral + bad;
    return totalCount;
  };

  countPositivePercentage = e => {
    const { good } = this.state;
    const total = this.countTotal();
    const percent = (good * 100) / total;
    return Math.round(percent);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotal();
    const PositivePercentage = this.countPositivePercentage();
    const options = Object.keys(this.state);
    const onLeaveFeedback = this.onLeaveFeedback;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={PositivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
