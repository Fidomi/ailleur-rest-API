/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from '../../utils/styles/colors';
// Import device from '../../utils/styles/device';
import { fontSizes } from '../../utils/styles/fonts';
import styled from 'styled-components';

export const ChevronIcon = styled(FontAwesomeIcon)`
    color: ${colors.dark};
    font-size: ${fontSizes.fontM};
    text-transform: uppercase;
    transform: ${({ chevronopen }) =>
        chevronopen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;
