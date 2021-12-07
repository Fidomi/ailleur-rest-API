/* eslint-disable no-unused-vars */
/* eslint-disable function-paren-newline */
import { Answer, AnswerLabel, Container } from './style';
import React, { useContext } from 'react';
import { ResultsContext } from '../../utils/context/index';
import PropTypes from 'prop-types';

const AnswersContainer = (props) => {
    const { answers, saveAnswers } = useContext(ResultsContext);
    function handleSelectChange(event) {
        props.setSelectedAnswer(parseInt(event.target.value, 10));
        saveAnswers(props.questionNumber, parseInt(event.target.value, 10));
    }

    return (
        <Container>
            {props.dataAnswers.answers.map((answer, index) => (
                <AnswerLabel
                    key={`answer-${props.questionNumber}-${index}`}
                    htmlFor={`answer-${props.questionNumber}-${index}`}
                >
                    <Answer
                        type="radio"
                        name={`answer-${props.questionNumber}-${index}`}
                        id={`answer-${props.questionNumber}-${index}`}
                        checked={answers[`a${props.questionNumber}`] === index}
                        onChange={(event) => handleSelectChange(event)}
                        value={index}
                    />
                    {answer.charAt(0).toUpperCase() + answer.substring(1)}
                </AnswerLabel>
            ))}
        </Container>
    );
};

export default AnswersContainer;

AnswersContainer.propTypes = {
    dataAnswers: PropTypes.object,
    questionNumber: PropTypes.number,
    selectedAnswer: PropTypes.number,
    setSelectedAnswer: PropTypes.func
};
