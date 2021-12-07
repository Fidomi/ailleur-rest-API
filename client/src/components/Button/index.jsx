import { StyledButton } from './style';
import PropTypes from 'prop-types';
import React from 'react';

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    maxWidth,
    minWidth
}) => (
    <StyledButton
        onClick={onClick}
        type={type}
        buttonSize={buttonSize}
        buttonStyle={buttonStyle}
        maxWidth={maxWidth}
        minWidth={minWidth}
    >
        {children}
    </StyledButton>
);

Button.propTypes = {
    buttonSize: PropTypes.string.isRequired,
    buttonStyle: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    maxWidth: PropTypes.string,
    minWidth: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string
};
