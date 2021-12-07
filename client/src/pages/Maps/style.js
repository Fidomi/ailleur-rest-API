import device from '../../utils/styles/device';
import { fontSizes } from '../../utils/styles/fonts';
import styled from 'styled-components';

export const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    margin: 0 auto;
    height: 100%;
    @media ${device.tablet} {
        flex-flow: row wrap;
        height: 60vh;
    }
`;

export const MapsContainer = styled.main`
    width: 100%;
    margin: 0 auto;
    @media ${device.tablet} {
        width: 90%;
    }
`;

export const HeroText = styled.div`
    width: 100%;
    padding: 1rem 2rem;
    margin: 0 auto;
    font-size: ${fontSizes.fontS};
    @media ${device.tablet} {
        font-size: ${fontSizes.fontRegular};
        padding: 2rem 4rem;
    }
`;

export const HeroTextTitle = styled.h1`
    margin-bottom: 0rem;
    @media ${device.tablet} {
        margin-bottom: 1rem;
    }
`;
