import device from '../../utils/styles/device';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardWrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0.5rem auto;
    @media ${device.tablet} {
        margin: 1.5rem auto;
    }
`;

export const CardImage = styled.img`
    height: 12rem;
    width: 100vw;
    object-fit: cover;
    margin: 0 auto;
    position: relative;
    @media ${device.tablet} {
        height: 20rem;
        width: 20rem;
        margin-bottom: 2rem;
    }
`;

export const Picto = styled.img`
    height: 1.5rem;
    width: 1.5rem;
    object-fit: cover;
    margin: 0 auto;
    margin-right: 0.4rem;
`;

export const OnTopLink = styled(Link)`
    position: absolute;
    & > Button {
        max-height: 3rem;
    }
    @media ${device.tablet} {
        position: initial;
    }
`;
