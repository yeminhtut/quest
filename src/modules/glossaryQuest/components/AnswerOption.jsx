import React from 'react'
import { func, number, string } from 'prop-types'

const AnswerOption = props => {
    return (
        <li className='answerOption'>
            <input
                checked={props.selectedAnswer == props.answerId}
                onChange={props.onAnswerSelected}
                type='radio'
                value={props.answerId}
            />
            <label className='radioCustomLabel' htmlFor={props.answerContent}>
                {props.answerContent}
            </label>
        </li>
    )
}

AnswerOption.propTypes = {
    answerContent: string,
    answerId: number,
    onAnswerSelected: func,
    selectedAnswer: string
}

export default AnswerOption
