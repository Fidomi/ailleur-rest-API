/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { colors } from '../../utils/styles/colors';
import { fontSizes } from '../../utils/styles/fonts';
import styled from 'styled-components';

export const StyledAccordionSection = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow: auto;
    margin: 1rem 0 0 0;
`;

export const AccordionWrapper = styled.div`
    box-sizing: border-box;
    display: block;
    background-color: ${colors.secondary};
    transition: all-linear;
`;

export const AccordionTitle = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 3rem;
    padding: 0.25rem 0.8rem;
    text-transform: uppercase;
    font-size: ${fontSizes.fontS};
    color: ${colors.primary};
    position: relative;
    border: none;
    background-color: ${colors.secondary};
    border-bottom: 1px solid ${colors.primary};
`;

export const AccordionList = styled.ul`
    box-sizing: border-box;
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    // justify-content: center;
    // align-items: center;
    width: 100%;
    padding: ${({ chevronopen }) => (chevronopen ? `0.2rem 1.5rem` : `0px`)};
    margin: 0;
`;

export const AccordionItem = styled.li`
    display: ${({ chevronopen }) => (chevronopen ? `flex` : `none`)};
    color: ${colors.primary};
    background-color: ${colors.secondary};
    width: 100%;
    font-size: ${fontSizes.fontS};
    &:last-of-type {
        margin-bottom: 0.2rem;
    }
`;

export const AccordionIcon = styled(FontAwesomeIcon)`
    color: ${colors.primary};
    font-size: ${fontSizes.fontM};
    text-transform: uppercase;
    transform: ${({ chevronopen }) =>
        chevronopen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${colors.primary};
    margin: 0.2rem 0;
`;
