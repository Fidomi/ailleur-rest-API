import { colors } from '../../utils/styles/colors';
import device from '../../utils/styles/device';
import styled from 'styled-components';

export const StyledSideMenu = styled.div`
    width: 100vw;
    top: 3rem;
    position: absolute;
    left: 0;
    display: ${({ open }) => (open ? 'block' : 'none')};
    z-index: ${({ open }) => (open ? '1001' : '-100')};
    background: ${colors.secondary};

    @media ${device.tablet} {
        width: 30vw;
        left: auto;
        right: 0;
        top: 4rem;
    }
`;
