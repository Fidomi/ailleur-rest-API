/* eslint-disable id-length */
import PropTypes from 'prop-types';
import React from 'react';

function Departement(props) {
    return (
        <path
            d={props.d}
            data-name={props.dataName}
            data-num={props.dataNum}
            fill={props.fill}
            stroke={props.stroke}
        ></path>
    );
}

export default Departement;

Departement.propTypes = {
    d: PropTypes.string,
    dataName: PropTypes.string,
    dataNum: PropTypes.string,
    fill: PropTypes.string,
    stroke: PropTypes.string
};
