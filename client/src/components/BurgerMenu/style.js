/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable max-len */
import colors from '../../utils/styles/colors';
import device from '../../utils/styles/device';
import { fontSizes } from '../../utils/styles/fonts';
import styled from 'styled-components';

export const BurgerMenuWrapper = styled.div`
    height: 30px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-direction: column;
    margin: ${fontSizes.fontS};
    @media ${device.tablet} {
        display: none;
    }
`;

export const BurgerLine = styled.div`
    background-color: ${colors.blueish};
    height: 5px;
    width: 2.3rem;
    align-self: center;
    transition: all linear;

    &:first-child {
        transform: ${(props) =>
            props.open ? 'rotate(45deg)' : 'rotate(0deg)'};
        transform-origin: top left;
    }
    &:nth-child(2) {
        opacity: ${(props) => (props.open ? '0' : '1')};
    }
    &:nth-child(3) {
        transform: ${(props) =>
            props.open ? 'rotate(-45deg)' : 'rotate(0deg)'};
        transform-origin: bottom left;
    }
`;

export const MenuWrapper = styled.div`
    @media ${device.tablet} {
        display: none;
    }
`;
