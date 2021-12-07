/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { ResultsContext } from '../../utils/context/index';
import France from '../../components/France/index';
import { useQuery } from 'react-query';

const fetchResults = async (queryString) => {
    const res = await fetch(`http://localhost:3002/mymap/?${queryString}`);
    const response = await res.json();
    return response;
};

function MyDestination() {
    const { answers, saveAnswers } = useContext(ResultsContext);
    let answersArray = [];
    for (const answer in answers) {
        answersArray.push(answers[answer]);
    }
    const answersQuery = answersArray.reduce(
        (acc, word, index) =>
            index === 0
                ? acc + `a${index}=${word}`
                : acc + `&a${index}=${word}`,
        ''
    );
    //const queryString = `a0=1&a1=3&a2=1&a3=1&a4=3&a5=0&a6=2&a7=2&a8=2`;
    console.log(answersQuery);

    const useAnswersQuery = (answersQuery) =>
        useQuery(['Answsers', answersQuery], () => fetchResults(answersQuery));
    const { status, data, error } = useAnswersQuery(answersQuery);

    const results = data;
    console.log(results);
    return (
        <React.Fragment>
            {status === 'error' && <div>{error.message}</div>}
            {status === 'loading' && <div>Loading data...</div>}
            {status === 'success' && (
                <France title="Ma Destination" results={results} />
            )}
        </React.Fragment>
    );
}

export default MyDestination;
