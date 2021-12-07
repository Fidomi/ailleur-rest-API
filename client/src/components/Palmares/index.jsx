import PropTypes from 'prop-types';
import React from 'react';
import { StyledPalmares } from './style';

function Palmares(props) {
    const listToIterate =
        props.palmaresSize === 'small'
            ? props.results.slice(0, 3)
            : props.results;
    return (
        <StyledPalmares palmaresSize={props.palmaresSize}>
            <div>
                {listToIterate.map((ele, index) => (
                    <p key={`palmares_${index}`}>
                        {index +
                            1 +
                            ' : ' +
                            ele['dep_name'] +
                            ' (' +
                            parseFloat(ele[props.resultWord]).toFixed(2) +
                            '%)'}
                    </p>
                ))}
            </div>
        </StyledPalmares>
    );
}

export default Palmares;

Palmares.propTypes = {
    palmaresSize: PropTypes.string,
    results: PropTypes.array,
    resultWord: PropTypes.string
};
