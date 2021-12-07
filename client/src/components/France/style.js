import { fonts, fontSizes } from '../../utils/styles/fonts';
import colors from '../../utils/styles/colors';
import device from '../../utils/styles/device';
import styled from 'styled-components';

export const ResultsContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 90vw;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    @media ${device.laptopL} {
        flex-flow: row nowrap;
        justify-content: space-between;
    }
`;

export const MapContainer = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    order: 1;
    align-self: flex-start;
    @media ${device.laptopL} {
        order: 2;
        width: 40%;
        margin: 0 0;
    }
`;

export const MapTitle = styled.div`
    width: 80vw;
    margin: 2em auto;
    text-align: center;
    display: flex;
    flex-flow: column;
    & > h3 {
        font-family: ${fonts.fontBody};
        font-size: ${fontSizes.fontM};
        font-weight: 300;
        margin: 0;
    }
    & > h1 {
        font-family: ${fonts.fontBody};
        font-size: ${fontSizes.fontL};
        margin: 0 auto;
        color: ${colors.finalist};
    }
    @media ${device.laptop} {
        & > h1 {
            font-size: ${fontSizes.fontXL};
        }
        & > h3 {
            font-size: ${fontSizes.fontL};
        }
    }
`;

export const MainContainer = styled.div`
    display: flex;
    flex-flow: column;
    width: 95vw;
    margin: 0 auto;
    align-items: center;
    padding-bottom: 2em;
`;
