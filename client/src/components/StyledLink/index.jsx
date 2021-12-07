import { Link } from 'react-router-dom';
import colors from '../../utils/styles/colors';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${colors.primary};
`;

export default StyledLink;
