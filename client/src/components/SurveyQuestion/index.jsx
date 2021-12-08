/* eslint-disable no-unused-vars */
/* eslint-disable dot-location */

import { ChevronIcon, Container, Question, QuestionText } from './style';
import React, { useState, useEffect, useContext } from 'react';
import AnswersContainer from '../AnswersContainer/index';
import PropTypes from 'prop-types';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ResultsContext, SurveyContext } from '../../utils/context/index';
import { useQuery } from 'react-query';
import Loader from 'react-loader-spinner';

const fetchQuestion = async () => {
    const res = await fetch(`/survey/`);
    const result = await res.json();
    return result;
};

const SurveyQuestion = (props) => {
    const { status, data, error, isFetching } = useQuery(`survey`, () =>
        fetchQuestion()
    );
    const { activeQuestion, setActiveQuestion } = useContext(SurveyContext);
    const { answers, saveAnswers } = useContext(ResultsContext);
    const [chevronOpen, setChevronOpen] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(0);

    const saveSelectedAnswer = (num) => {
        setSelectedAnswer(answers[num]);
        return selectedAnswer;
    };

    const clickChevrons = (num) => {
        if (chevronOpen === 0) {
            setChevronOpen(1);
            setActiveQuestion(num);
        } else {
            setChevronOpen(0);
            setActiveQuestion(null);
        }
    };
    useEffect(() => {
        props.questionNumber === activeQuestion
            ? setChevronOpen(1)
            : setChevronOpen(0);
    }, [activeQuestion, props.questionNumber]);

    return (
        <Container key={props.questionNumber}>
            {status === 'error' && <div>{error.message}</div>}
            {status === 'loading' && (
                <div
                    style={{
                        width: '100%',
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Loader
                        type="ThreeDots"
                        color="#6ea4d3"
                        height="100"
                        width="100"
                    />
                </div>
            )}
            {status === 'success' && (
                <Question>
                    <QuestionText htmlFor={props.questionNumber}>
                        {data[props.questionNumber].questionBody
                            .charAt(0)
                            .toUpperCase() +
                            data[props.questionNumber].questionBody.substring(
                                1
                            )}
                        {isFetching && <p>updating...</p>}
                    </QuestionText>
                    <ChevronIcon
                        chevronopen={chevronOpen}
                        onClick={(event) => clickChevrons(props.questionNumber)}
                        icon={faChevronDown}
                    />
                </Question>
            )}
            {chevronOpen === 1 && (
                <AnswersContainer
                    name={selectedAnswer}
                    id={props.questionNumber}
                    selectedAnswer={selectedAnswer}
                    setSelectedAnswer={setSelectedAnswer}
                    dataAnswers={data[props.questionNumber]}
                    questionNumber={data[props.questionNumber].questionNumber}
                />
            )}
        </Container>
    );
};

export default SurveyQuestion;

SurveyQuestion.propTypes = {
    activeQuestion: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    questionNumber: PropTypes.number,
    setActiveQuestion: PropTypes.func
};
