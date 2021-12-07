import { colors } from '../../utils/styles/colors';
import device from '../../utils/styles/device';
import { fontSizes } from '../../utils/styles/fonts';
import styled from 'styled-components';

export const StyledPalmares = styled.div`
    width: 100%;
    max-width: 500px;
    flex: 1;
    order: 3;
    margin: 0;
    & > div {
        max-width: ${(props) =>
            props.palmaresSize === 'small' ? '90%' : '70%'};
        max-height: ${(props) =>
            props.palmaresSize === 'small' ? '10rem' : 'none'};
        background-color: ${(props) =>
            props.palmaresSize === 'small' ? colors.dark : colors.white};
        display: flex;
        flex-flow: column wrap;
        margin: 1em auto;
        border: 0.15em solid black;
        border-radius: 1em;
        padding: 0.75em;
        & > p {
            font-size: ${(props) =>
                props.palmaresSize === 'small'
                    ? fontSizes.fontRegular
                    : fontSizes.fontXS};
            color: ${(props) =>
                props.palmaresSize === 'small' ? colors.white : colors.dark};
            margin: 0;
            padding: 0;
        }
    }

    @media ${device.laptopL} {
        width: 25%;
        height: auto;
        align-self: ${(props) =>
            props.palmaresSize === 'small' ? 'center' : 'flex-start'};
        & > div {
            max-height: ${(props) =>
                props.palmaresSize === 'small' ? '15rem' : '50rem'};
            max-width: 95%;
            flex-wrap: wrap;
            & > p {
                width: ${(props) =>
                    props.palmaresSize === 'small' ? '100%' : '50%'};
            }
        }
    }
`;
