import { nanoid } from "nanoid"
import PropTypes from 'prop-types';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
                {options.map(option => {
                return (
                    <button key={nanoid()} type='button' onClick={() => onLeaveFeedback(option)}>{option} </button>
               )      
        })} 
        </div>
    )
} 


FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
}