/* eslint-disable no-unused-vars */
import { colors } from '../../utils/styles/colors';
import device from '../../utils/styles/device';
import { fontSizes, fonts } from '../../utils/styles/fonts';
import styled from 'styled-components';

export const StyledWeight = styled.div`
    width: 85%;
    margin: 0 0 1.5rem 1.9rem;
    display: flex;
    flex-flow: column wrap;
    & > p {
        font-size: ${fontSizes.fontXS};
        color: ${colors.blueish};
    }
    & > div {
        display: flex;
        flex-flow: column wrap;
        margin: 0 auto;
        justify-content: center;
        max-width: 10rem;
        & > label {
            font-size: ${fontSizes.fontS};
            background-color: ${colors.blueish};
            color: ${colors.white};
            border-radius: 3rem;
            padding: 0.2rem;
            text-align: center;
            margin-bottom: 0.6rem;
        }
        & > input {
            -webkit-appearance: none;
            &::-webkit-slider-runnable-track {
                background: ${colors.grey};
                border-radius: 1em;
                height: 0.5em;
            }
            &::-moz-range-track {
                background: ${colors.shadow};
                height: 5px;
            }
            &::-webkit-slider-thumb {
                -webkit-appearance: none;
                height: 15px;
                width: 15px;
                background: ${colors.blueish};
                margin-top: -5px;
                border-radius: 50%;
            }
            &::-moz-range-thumb {
                -webkit-appearance: none;
                height: 15px;
                width: 15px;
                background: ${colors.blueish};
                margin-top: -5px;
                border-radius: 50%;
            }
        }
    }
`;
