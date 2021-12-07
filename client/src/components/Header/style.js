/* eslint-disable sort-imports */
import { fontSizes, fonts } from '../../utils/styles/fonts';
import colors from '../../utils/styles/colors';
import device from '../../utils/styles/device';

import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;
    width: 100%;
    top: 0px;
    z-index: 1000;
    height: 3.5rem;
    margin: 0 auto;
    padding: 0.62rem;
    background-color: ${colors.secondary};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    filter: drop-shadow(0px -3px 5px ${colors.shadow});

    @media ${device.tablet} {
        height: 4rem;
        padding: 1rem 1.2rem;
    }
`;

export const NavLinks = styled.nav`
    display: none;

    @media ${device.tablet} {
        display: flex;
        flex-direction: row;
        padding: 1rem;
        align-items: center;
    }
`;

export const HeaderLogo = styled.img`
    box-sizing: content-box;
    max-height: 1.92rem;
    padding: 1rem 0.1rem 1rem 1rem;

    @media ${device.tablet} {
        max-height: 2.2rem;
        padding: 1rem 0.5rem 1rem 2rem;
    }
`;

export const TitleText = styled.h1`
    font-family: ${fonts.fontLogo};
    font-size: ${fontSizes.fontXL};
    padding: 5px;
    margin: 0;
    color: ${colors.dark};
    transition: transform 0.3s ease;
    &:hover {
        transform: translateY(-3px);
        color: ${colors.dark};
    }
    @media ${device.tablet} {
        font-size: ${fontSizes.fontXL};
        padding: 0px;
    }
`;

export const Title = styled.span`
    line-height: 2rem;
    margin: 0;
    display: flex;
    align-items: center;
`;
