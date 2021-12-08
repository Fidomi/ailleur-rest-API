/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { ResultsContext } from '../../utils/context/index';
import France from '../../components/France/index';
import { useQuery } from 'react-query';
import Error from '../Error/index';
import Loader from 'react-loader-spinner';

const fetchResults = async (queryString) => {
    const res = await fetch(`/mymap/?${queryString}`);
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

    let { status, data, error } = useQuery(
        `answsers-${answersQuery}`,
        () => fetchResults(answersQuery),
        { refetchOnMount: true }
    );
    let results = data;

    return (
        <React.Fragment>
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
            {status === 'success' && results !== undefined && (
                <France title="Ma Destination" results={results} />
            )}
            {results === undefined && <Error />}
        </React.Fragment>
    );
}

export default MyDestination;
