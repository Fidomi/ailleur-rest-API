import { colorsMap } from '../../utils/styles/colors';
import device from '../../utils/styles/device';
import { fontSizes } from '../../utils/styles/fonts';
import styled from 'styled-components';

export const StyledTable = styled.div`
    width: 100%;
    max-width: 500px;
    order: 2;
    flex: 1;
    margin: 0;
    padding: 1.1rem 1em;
    & > div {
        display: flex;
        flex-flow: row wrap;
        margin: 0 auto;
    }
    @media ${device.laptopL} {
        max-width: 28%;
        order: 1;
        align-self: flex-end;
        margin-bottom: 5rem;
        padding-right: 5rem;
        & > div {
            flex-flow: column;
        }
    }
`;

export const StyledCell = styled.div`
    min-width: 4rem;
    padding: 0.1rem;
    margin: 0.1rem 0.25rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    font-size: ${fontSizes.fontXS};
    & > p {
        margin: 0;
        text-align: center;
        line-height: 1rem;
    }
    & > div {
        background-color: ${(props) =>
            props.colorIndex ? colorsMap[props.colorIndex] : colorsMap.veryLow};
        float: left;
        height: 0.8rem;
        width: 0.8rem;
        margin-right: 0.25rem;
        clear: both;
    }
`;
