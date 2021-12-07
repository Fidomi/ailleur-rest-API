/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */

import BackgroundImage from '../../assets/pine-watt-unsplash.jpg';
import BackgroundImage2 from '../../assets/joran-quinten-aOUlPvDJR18-unsplash.jpg';
import BackgroundImage3 from '../../assets/matthieu-da-cruz-QrC4oaYG-WY-unsplash.jpg';
import device from '../../utils/styles/device';
import styled from 'styled-components';

export const Background = styled.div`
    width: 100vw;
    height: 170vh;
    padding-top: 2em;
    background-image: ${(props) => {
        if (props.page === 1) {
            return `url(${BackgroundImage})`;
        } else if (props.page === 2) {
            return `url(${BackgroundImage2})`;
        } else {
            return `url(${BackgroundImage3})`;
        }
    }};
    background-size: cover;
    backgroud-position: center;
    @media (min-width: 1200px) {
        height: 100vh;
    }
`;

export const SurveyContainer = styled.form`
    margin: auto auto;
    padding-bottom: 2em;
    width: 90%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: rgba(100%, 100%, 100%, 35%);
    @media ${device.tablet} {
        width: 80vw;
        max-width: 1400px;
        border-radius: 2em;
        background-color: rgba(100%, 100%, 100%, 25%);
        min-height: 70vh;
    }
`;

export const Text = styled.div`
    width: 95vw;
    padding: 1rem 1rem;
    margin: 0 auto;
    @media ${device.tablet} {
        max-width: 65%;
        margin-top: 5%;
    }
`;

export const GroupButtons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    self-align: flex-end;
`;

export const SetOfQuestions = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    margin: 0 auto;
    justify-content: center;
    @media (min-width: 1200px) {
        flex-direction: row;
        margin: 1rem 5%;
        justify-content: space-between;
    }
`;
