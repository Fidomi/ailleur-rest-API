import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Handle screening of the answers
export const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
    const [activeQuestion, setActiveQuestion] = useState(null);
    return (
        <SurveyContext.Provider value={{ activeQuestion, setActiveQuestion }}>
            {children}
        </SurveyContext.Provider>
    );
};
SurveyProvider.propTypes = {
    children: PropTypes.object
};

// Store the survey's results
export const ResultsContext = createContext();

export const ResultsProvider = ({ children }) => {
    const [answers, setAnswers] = useState({
        a0: 0,
        a1: 0,
        a2: 0,
        a3: 0,
        a4: 0,
        a5: 0,
        a6: 0,
        a7: 0,
        a8: 0
    });
    const saveAnswers = (questionNumber, newAnswer) => {
        const currentAnswer = 'a' + questionNumber;
        setAnswers((answers) => {
            answers[currentAnswer] = newAnswer;
            return { ...answers };
        });
    };

    return (
        <ResultsContext.Provider value={{ answers, saveAnswers }}>
            {children}
        </ResultsContext.Provider>
    );
};

ResultsProvider.propTypes = {
    children: PropTypes.object
};

// Handle theme of the map
export const ThemeMapContext = createContext();

export const ThemeMapProvider = ({ children }) => {
    const [resultWord, setResultWord] = useState('result');
    return (
        <ThemeMapContext.Provider value={{ resultWord, setResultWord }}>
            {children}
        </ThemeMapContext.Provider>
    );
};
ThemeMapProvider.propTypes = {
    children: PropTypes.object
};
