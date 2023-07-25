import { Component } from "react";
import { Statistic } from "./Statistic/Statistic";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";

class App extends Component {
  state = {
        good: 0,
        neutral: 0,
        bad: 0, 
  }
  
  onLeaveFeedback = (option) => {
    this.setState(prevValue => ({
      [option]: prevValue[option] + 1,
        }))
  }

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad
  }

  countPositiveFeedbackPercentage = ({ good }) => {
    return Math.round(good * 100 / this.countTotalFeedback(this.state))
  }


  render() {
    const { good, neutral, bad } = this.state;
    const hasFeedback = good || neutral || bad;
    return (
    <>
      <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
      </Section>
        <Section title='Statistic'>
          {hasFeedback ?
            <Statistic good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback({ good, neutral, bad })} positivePercentage={this.countPositiveFeedbackPercentage({ good })} />
            : 
          <Notification message="There is no feedback"></Notification>}
      </Section>
    </>
  );
  }
};

export default App
