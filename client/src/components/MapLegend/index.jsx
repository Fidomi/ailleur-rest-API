/* eslint-disable no-unused-vars */
import { StyledCell, StyledTable } from './style';
import React from 'react';
import PropTypes from 'prop-types';

const addColor = (index) => {
    switch (index) {
        case 0:
            return 'veryLow';
        case 1:
            return 'low';
        case 2:
            return 'medium';
        case 3:
            return 'strong';
        case 4:
            return 'veryStrong';
        default:
            return 'veryLow';
    }
};

function sortResults(spreadResults, resultWord) {
    const LEVEL5 = spreadResults.filter(
        (ele) => ele.spreadResult <= 100 && ele.spreadResult > 80
    );
    const LEVEL4 = spreadResults.filter(
        (ele) => ele.spreadResult <= 80 && ele.spreadResult > 60
    );
    const LEVEL3 = spreadResults.filter(
        (ele) => ele.spreadResult <= 60 && ele.spreadResult > 40
    );
    const LEVEL2 = spreadResults.filter(
        (ele) => ele.spreadResult <= 40 && ele.spreadResult > 20
    );
    const LEVEL1 = spreadResults.filter(
        (ele) => ele.spreadResult <= 20 && ele.spreadResult >= 0
    );
    const LABELS = [
        {
            max: parseFloat(LEVEL5[0][resultWord]).toFixed(0),
            min: parseFloat(LEVEL4[0][resultWord]).toFixed(0)
        },
        {
            max: parseFloat(LEVEL4[0][resultWord]).toFixed(0),
            min: parseFloat(LEVEL3[0][resultWord]).toFixed(0)
        },
        {
            max: parseFloat(LEVEL3[0][resultWord]).toFixed(0),
            min: parseFloat(LEVEL2[0][resultWord]).toFixed(0)
        },
        {
            max: parseFloat(LEVEL2[0][resultWord]).toFixed(0),
            min: parseFloat(LEVEL1[0][resultWord]).toFixed(0)
        },
        {
            max: parseFloat(LEVEL1[0][resultWord]).toFixed(0),
            min: parseFloat(LEVEL1[LEVEL1.length - 1][resultWord]).toFixed(0)
        }
    ];
    return LABELS;
}

function MapLegend(props) {
    const legendData = sortResults(props.results, props.resultWord);

    return (
        <StyledTable>
            <div>
                {legendData.map((ele, index) => (
                    <StyledCell
                        key={`legend-${4 - index}`}
                        colorIndex={addColor(4 - index)}
                    >
                        <div className="box"></div>
                        <p>{`${ele.max}% <=  >${ele.min}%`}</p>
                    </StyledCell>
                ))}
            </div>
        </StyledTable>
    );
}

export default MapLegend;

MapLegend.propTypes = {
    results: PropTypes.array,
    resultWord: PropTypes.string
};
