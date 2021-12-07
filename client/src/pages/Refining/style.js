import { colors } from '../../utils/styles/colors';
import device from '../../utils/styles/device';
import { fontSizes, fonts } from '../../utils/styles/fonts';
import styled from 'styled-components';

export const RefiningContainer = styled.div`
    width: 85%;
    margin: 1.5rem auto;
    padding-bottom: 4rem;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    & > p {
        font-size: ${fontSizes.fontXS};
        text-align: center;
    }
    > :last-child {
        flex: 1 100%;
        display: flex;
        flex-flow: row no-wrap;
        justify-content: center;
        margin: 0 auto;
        margin-top: 2rem;
    }
    @media ${device.tablet} {
        flex-flow: row wrap;

        > p {
            font-size: ${fontSizes.fontRegular};
            flex: 1 100%;
        }
    }
`;

export const RefiningCategory = styled.div`
    width: 100%;
    margin: 2rem auto;
    margin-bottom: 0.5rem;
    & .title {
        display: flex;
        padding: 0rem 2rem;
        width: 95%;
        flex-flow: row no-wrap;
        justify-content: center;
        align-items: center;
        & > h2 {
            font-size: ${fontSizes.fontRegular};
            font-family: ${fonts.fontBody};
            font-weight: 400;
            flex: 2;
        }
        & > img {
            height: 1.5rem;
            width: 1.5rem;
            object-fit: cover;
            filter: drop-shadow(0px 5px 3px ${colors.shadow});
            margin: 0 auto;
            margin-right: 1rem;
        }
    }
    @media ${device.tablet} {
        max-width: 30%;
        min-width: 400px;
    }
`;

export const RefiningItem = styled.div`
    width: 100%;
    margin: 0 auto;
    & .subTitle {
        display: flex;
        width: 100%;
        flex-flow: row no-wrap;
        align-items: center;
        text-align: center;
        & > h3 {
            font-size: ${fontSizes.fontS};
            color: ${colors.blueish};
            text-align: left;
            font-weight: 400;
            flex: 3;
        }
        & > img {
            height: 1.5rem;
            width: 1.5rem;
            object-fit: cover;
            margin: 0 auto;
            margin-right: 0.4rem;
            color: ${colors.blueish};
        }
    }
    & .description {
        width: 85%;
        margin: 0 0 0 1.9rem;
        font-size: 0.8rem;
    }
    @media ${device.tablet} {
    }
`;
