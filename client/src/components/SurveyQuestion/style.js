/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from '../../utils/styles/colors';
import device from '../../utils/styles/device';
import { fontSizes } from '../../utils/styles/fonts';
import styled from 'styled-components';

export const Question = styled.div`
    min-width: 16rem;
    border-radius: 1rem;
    background-color: rgba(245, 245, 245, 0.5);
    padding: 1rem;
    margin: 0.5rem 0;
    display: flex;
    flex-direction: row;
`;

export const QuestionText = styled.label`
    width: 95%;
    font-size: 1rem;
    padding: 0 0.3rem;
`;

export const ChevronIcon = styled(FontAwesomeIcon)`
    color: ${colors.dark};
    font-size: ${fontSizes.fontM};
    text-transform: uppercase;
    transform: ${({ chevronopen }) =>
        chevronopen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0.5rem;
    @media (min-width: 1200px) {
        width: 33%;
    }
    @media ${device.desktop} {
        max-width: 800px;
    }
`;
