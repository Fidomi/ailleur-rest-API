/* eslint-disable indent */
/* eslint-disable max-lines */
/* eslint-disable id-length */
/* eslint-disable max-len */
import { colors, colorsMap } from '../../utils/styles/colors';
import {
    MainContainer,
    MapTitle,
    MapContainer,
    ResultsContainer
} from './style';
import React, { useState } from 'react';
import { Button } from '../Button';
import Departement from '../Departement';
import FranceMap from './franceMap';
import MapLegend from '../MapLegend';
import Palmares from '../Palmares';
import PropTypes from 'prop-types';
import StyledLink from '../StyledLink/index';

function France(props) {
    const [palmaresSize, setPalmaresSize] = useState('small');
    const handlePalmaresSize = () => {
        palmaresSize === 'small'
            ? setPalmaresSize('big')
            : setPalmaresSize('small');
    };
    const resultWord = props.resultWord ? props.resultWord : 'result';
    function spreadResults(resultsArray) {
        const maxRate = parseFloat(resultsArray[0][resultWord]);
        const minRate = parseFloat(
            resultsArray[resultsArray.length - 1][resultWord]
        );
        const spreadResultsArray = resultsArray.map((ele) => {
            ele['spreadResult'] = (
                (parseFloat(ele[resultWord]) - minRate) *
                (100 / (maxRate - minRate))
            ).toFixed(3);
            return ele;
        });
        return spreadResultsArray;
    }
    const spreadResultsArray = spreadResults(props.results);

    function resultsColor(dpt) {
        let currDptIndex = spreadResultsArray.findIndex((resultDpt) => {
            if (dpt.dataNum === '2') {
                return resultDpt['dep_name'] === 'Aisne';
            } else if (dpt.dataNum !== '2A' && dpt.dataNum !== '2B') {
                return parseInt(resultDpt['dep_id']) === parseInt(dpt.dataNum);
            } else {
                return resultDpt['dep_id'] === dpt.dataNum;
            }
        });

        let rate = parseFloat(spreadResultsArray[currDptIndex]['spreadResult']);
        if (rate <= 100 && rate > 80) {
            return colorsMap.veryStrong;
        } else if (rate <= 80 && rate > 60) {
            return colorsMap.strong;
        } else if (rate <= 60 && rate > 40) {
            return colorsMap.medium;
        } else if (rate <= 40 && rate > 20) {
            return colorsMap.low;
        } else {
            return colorsMap.veryLow;
        }
    }

    const handleColor = (dpt, colorFinalist) => {
        let finalistId = props.results[0]['dep_id'];
        let isFinalist = false;
        const isFinalistCorsica = finalistId === ('2A' || '2B') ? true : false;
        if (isFinalistCorsica) {
            isFinalist = dpt.dataNum === finalistId ? true : false;
        } else {
            isFinalist =
                parseInt(dpt.dataNum) === parseInt(finalistId) ? true : false;
        }
        if (isFinalist) {
            return colorFinalist;
        } else {
            return resultsColor(dpt);
        }
    };

    return (
        <MainContainer>
            <MapTitle>
                <h3>{props.title.toUpperCase()}</h3>
                <h1>{props.results[0]['dep_name'].toUpperCase()}</h1>
            </MapTitle>
            <ResultsContainer>
                <MapLegend
                    results={spreadResultsArray}
                    resultWord={resultWord}
                />
                <MapContainer>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        width={props.width}
                        height={props.height}
                        enableBackground="new 0 0 492 543"
                        version="1.1"
                        viewBox="0 0 492 543"
                        xmlSpace="preserve"
                    >
                        {FranceMap.map((dpt) => (
                            <Departement
                                key={`id-${dpt.dataNum}`}
                                d={dpt.d}
                                data-num={dpt.dataNum}
                                data-name={dpt.dataName}
                                fill={handleColor(dpt, colors.finalist)}
                                stroke={colors.dark}
                            ></Departement>
                        ))}
                    </svg>
                </MapContainer>
                <Palmares
                    results={spreadResultsArray}
                    palmaresSize={palmaresSize}
                    resultWord={resultWord}
                />
            </ResultsContainer>
            <Button
                onClick={handlePalmaresSize}
                palmaresSize={palmaresSize}
                buttonSize="smallMobile"
                buttonStyle="successOutline"
                maxWidth="12rem"
                minWidth="12rem"
            >
                <div>
                    {palmaresSize === 'small'
                        ? 'CLASSEMENT COMPLET'
                        : 'LE PODIUM'}
                </div>
            </Button>
            {resultWord === 'result' && (
                <StyledLink to="/ma-destination/reglages">
                    <Button
                        buttonSize="smallMobile"
                        buttonStyle="successSolid"
                        maxWidth="12rem"
                        minWidth="12rem"
                    >
                        <div>AFFINER</div>
                    </Button>
                </StyledLink>
            )}
        </MainContainer>
    );
}

France.propTypes = {
    d: PropTypes.string,
    'data-name': PropTypes.string,
    'data-num': PropTypes.string,
    fill: PropTypes.string,
    height: PropTypes.string,
    palmaresSize: PropTypes.string,
    results: PropTypes.array,
    resultWord: PropTypes.string,
    setPalmaresSize: PropTypes.func,
    stroke: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    width: PropTypes.string
};

export default France;
