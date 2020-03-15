import React, { useState, useEffect } from 'react'
import { array, func } from 'prop-types'
import { Row } from 'antd'
import Quiz from './Quiz'

const QuestList = props => {
    const { quests, getQuests } = props
    const [selectedAnswer, setAnswer] = useState()
    const [questionCounter, setQuestionCounter] = useState(1)
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0)
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        handleGetData()
    }, [])

    const handleGetData = () => getQuests()

    const handleAnswerSelected = event => {
        const { value } = event.target
        setAnswer(value)
        if (quests[questionCounter - 1].correctAnswerId == value) {
            setCorrectAnswerCount(correctAnswerCount + 1)
        }

        if (questionCounter < quests.length) {
            setTimeout(() => setQuestionCounter(questionCounter + 1), 1500)
        } else {
            setTimeout(() => setSubmitted(true), 300)
        }
    }

    const renderResult = () => (
        <div className='result'>
            Your scroe is {correctAnswerCount} out of {quests.length}
        </div>
    )

    const renderQuiz = () => {
        return quests.map((question, i) => (
            <Quiz
                answerOptions={question.answers}
                className={questionCounter - 1 === i ? 'visible' : 'hidden'}
                key={i}
                onAnswerSelected={handleAnswerSelected}
                question={question}
                questionCounter={questionCounter}
                questionId={i}
                questionTotal={quests.length}
                selectedAnswer={selectedAnswer}
            />
        ))
    }
    return (
        <div className='show-list'>
            <Row gutter={[16, 16]}>
                <div className='container' style={{ position: 'relative' }}>
                    {!submitted ? renderQuiz() : renderResult()}
                </div>
            </Row>
        </div>
    )
}

QuestList.propTypes = {
    getQuests: func,
    quests: array
}

export default QuestList
