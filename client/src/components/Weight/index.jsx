/* eslint-disable no-unused-vars */
//import { Button} from '../../components/Button';
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ResultsContext } from '../../utils/context/index';
import { StyledWeight } from './style';

const findWeightName = (val) => {
    switch (parseInt(val)) {
        case 0:
            return 'AUCUNE';
        case 1:
            return 'IMPORTANT';
        case 2:
            return 'TRES IMPORTANT';
        case 3:
            return 'PRIMORDIAL';
        default:
            return 'AUCUNE';
    }
};

const Weight = ({ id }) => {
    const { answers, saveAnswers } = useContext(ResultsContext);
    const [weightName, setWeightName] = useState(findWeightName(answers[id]));
    const [value, setValue] = useState(answers[id]);

    const handleChange = (event, id) => {
        let value = event.target.value;
        setWeightName(findWeightName(answers[id]));
        setValue(answers[id]);
        saveAnswers(id.substring(1, 2), parseInt(value));
    };

    return (
        <StyledWeight key={`weight-${id}`}>
            <p>{`Quelle est l'importance de ce critère pour vous ?`}</p>
            <div>
                <label htmlFor={id}>{weightName}</label>
                <input
                    type="range"
                    id={id}
                    name={id}
                    min="0"
                    max={id === 'a1' || id === 'a4' || id === 'a6' ? '3' : '2'}
                    value={value}
                    onChange={(event) => handleChange(event, id)}
                    step="1"
                />
            </div>
        </StyledWeight>
    );
};

export default Weight;

Weight.propTypes = {
    value: PropTypes.string,
    key: PropTypes.string,
    id: PropTypes.string
};
