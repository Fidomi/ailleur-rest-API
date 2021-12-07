import colors from '../../utils/styles/colors';
import styled from 'styled-components';

export const ErrorContainer = styled.div`
    width: 92%;
    margin: auto auto;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    background-color: ${colors.secondary};
    align-items: center;
`;

export const ErrorTitle = styled.h1`
    text-align: center;
`;
