import { Component } from 'react';
import { nanoid } from 'nanoid';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = e => {
    const label = e.target.name;
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
    console.log(total);
    const percent = (good * 100) / total;
    console.log(percent);
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
        <h1>Please leave feedback</h1>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        <>
          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={PositivePercentage}
            />
          ) : (
            alert('There is no feedback')
          )}
        </>
      </>
    );
  }
}

export default App;
