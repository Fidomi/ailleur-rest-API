/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { ChevronIcon } from './style';
import PropTypes from 'prop-types';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Chevron = () => {
    const [chevronOpen, setChevronOpen] = useState(0);
    return (
        <ChevronIcon
            chevronopen={chevronOpen}
            onClick={() => {
                chevronOpen === 0 ? setChevronOpen(1) : setChevronOpen(0);
            }}
            icon={faChevronDown}
        />
    );
};

export default Chevron;

Chevron.propTypes = {
    questionNumber: PropTypes.number.isRequired
};
