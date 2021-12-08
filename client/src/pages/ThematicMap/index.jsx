import React from 'react';
import France from '../../components/France/index';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner';

const fetchResults = async (routeID) => {
    const res = await fetch(`/maps/${routeID}`);
    const result = await res.json();
    return result;
};

const handleMapsTypes = (type) => {
    if (type) {
        switch (type) {
            case 'security':
                return ['danger_total', `Santé et Sécurité`];
            case 'family':
                return ['daily_life_confort', `Vie Quotidienne`];
            case 'environment':
                return ['environmental_health', `Environnement`];
            default:
                return ['result', 'Ma destination'];
        }
    }
    return ['result', 'Ma destination'];
};

function ThematicMap() {
    const { type } = useParams();
    const resultWord = handleMapsTypes(type)[0];
    const typeTitle = handleMapsTypes(type)[1];

    let { status, data, error } = useQuery(
        `results-${type}`,
        () => fetchResults(type),
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
            {status === 'success' && (
                <France
                    title={typeTitle}
                    results={results}
                    type={type}
                    resultWord={resultWord}
                />
            )}
        </React.Fragment>
    );
}

export default ThematicMap;
