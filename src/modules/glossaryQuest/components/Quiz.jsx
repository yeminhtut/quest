import React from 'react'
import { array, func, number, object, string } from 'prop-types'
import AnswerOption from './AnswerOption'

const Quiz = props => {
    const { answerOptions, className, questionId, questionCounter, questionTotal } = props
    const { defenition } = props.question
    const renderAnswerOptions = ans => (
        <AnswerOption
            answerContent={ans.title}
            answerId={ans.id}
            correctAnswerId={props.question.correctAnswerId}
            key={ans.title}
            onAnswerSelected={props.onAnswerSelected}
            questionId={props.questionId}
            selectedAnswer={props.selectedAnswer}
        />
    )
    return (
        <div className={className} key={questionId}>
            <div className='questionCount'>
                Question <span>{questionCounter}</span> of <span>{questionTotal}</span>
            </div>
            <h2 className='question'>{defenition}</h2>
            <ul className='answerOptions'>{answerOptions.map(renderAnswerOptions)}</ul>
        </div>
    )
}

Quiz.propTypes = {
    answerOptions: array,
    className: string,
    defenition: string,
    onAnswerSelected: func,
    question: object,
    questionCounter: number,
    questionId: number,
    questionTotal: number,
    selectedAnswer: string
}

export default Quiz
