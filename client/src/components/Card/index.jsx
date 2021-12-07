import { CardImage, CardWrapper, OnTopLink, Picto } from './style';
import { Button } from '../../components/Button';
import PropTypes from 'prop-types';
import React from 'react';

function Card({ title, picture, logo, link }) {
    return (
        <CardWrapper>
            <CardImage src={picture} alt={title} />
            <OnTopLink to={link}>
                <Button
                    buttonSize="medMobile"
                    buttonStyle="primaryOutline"
                    maxWidth="15rem"
                    minWidth="10rem"
                >
                    <Picto src={logo} alt={`logo-${title}`} />
                    {title}
                </Button>
            </OnTopLink>
        </CardWrapper>
    );
}

export default Card;

Card.propTypes = {
    link: PropTypes.string,
    logo: PropTypes.string,
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};
