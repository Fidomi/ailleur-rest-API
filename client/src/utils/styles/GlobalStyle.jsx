/* eslint-disable indent */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
import { fontSizes, fonts } from './fonts';
import React from 'react';
import colors from './colors';
import { createGlobalStyle } from 'styled-components';
import device from './device';

const StyledGlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: ${fonts.fontBody};
    }

    --form-control-color: rebeccapurple;

    html,
    body {
        width:100vw;
        height:100vh;
        margin: 0;
        background-color: ${({ isDarkMode }) =>
            isDarkMode ? colors.dark : colors.secondary};
        font-size:${fontSizes.fontM};
        z-index:0;
    }

    main{
        margin-top:3.5rem;
    }

    h1{
        font-family: ${fonts.fontTitle};
        font-size: ${fontSizes.fontM};
        weight: 800;
        @media ${device.tablet} {
            font-size: ${fontSizes.fontL};
        }
        @media ${device.laptop} {
            font-size: ${fontSizes.fontXL};
        }
        @media ${device.desktop} {
            font-size: ${fontSizes.fontXXL};
        }
    }

    h2{
        font-family: ${fonts.fontTitle};
        font-size: ${fontSizes.fontL};
        weight: 500;
    }

    #root{
        width:100%;
    }

    button,li,a{
        text-decoration: none;
    }
    @media ${device.laptop} {
        html,
    body {font-size: ${fontSizes.fontRegular};}

`;

function GlobalStyle() {
    return <StyledGlobalStyle />;
}

export default GlobalStyle;
