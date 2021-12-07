/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import { colors } from '../../utils/styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 0.2rem 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
`;

export const Answer = styled.input`
    appearance: none;
    background-color: #fff;
    padding: 0 0.5rem 0 0;
    margin: 0 0.4rem 0 0;
    font: inherit;
    color: ${colors.warning};
    height: 1.15rem;
    width: 1.2rem;
    border: 0.15em solid ${colors.warning};
    border-radius: 50%;
    flow: 1;
    &:checked {
        background-color: ${colors.primary};
        border: 0.25em solid ${colors.white};
    }
`;

export const AnswerLabel = styled.label`
    display: flex;
    flex-flow: row;
    border-radius: 1rem;
    background-color: rgba(10, 10, 10, 0.5);
    font-size: 0.9rem;
    color: ${colors.secondary};
    padding: 1rem;
    margin: 0.5rem 0;
`;
