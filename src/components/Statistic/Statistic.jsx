import { nanoid } from "nanoid"
import PropTypes from 'prop-types';

export const Statistic = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <>
            <ul>
                <li key={nanoid()}>
                    <p>Good: {good}</p>
                </li>
                <li key={nanoid()}>
                    <p>Neutral: {neutral}</p>
                </li>
                <li key={nanoid()}>
                    <p>Bad: {bad}</p>
                </li>
                <li key={nanoid()}>
                    <p>Total: {total}</p>
                </li>
                <li key={nanoid()}>
                    <p>Positive percentage: {positivePercentage}%</p>
                </li>
            </ul>
        </>
    )
} 


Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}