/* eslint-disable max-lines-per-function */
import BurgerMenu from '../BurgerMenu/index';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
// eslint-disable-next-line sort-imports
import {
    HeaderContainer,
    HeaderLogo,
    NavLinks,
    Title,
    TitleText
} from './style';
import { React, useEffect, useState } from 'react';
import SideMenu from '../SideMenu';
import StyledLink from '../StyledLink/index';
import device from '../../utils/styles/device';

function Header() {
    const mqList = window.matchMedia(device.tablet);
    const isTablet = mqList.matches;
    const [open, setOpen] = useState(false);
    const [left, setLeft] = useState(false);

    useEffect(() => {
        if (isTablet && left) {
            setOpen(false);
            setLeft(false);
        }
    }, [isTablet, left]);

    return (
        <HeaderContainer>
            <Link to="/">
                <Title>
                    <HeaderLogo src={Logo} />
                    <TitleText>Ailleurs</TitleText>
                </Title>
            </Link>
            <NavLinks>
                <StyledLink
                    to="/cartes"
                    onMouseOver={() => {
                        setOpen(true);
                    }}
                >
                    <Button
                        type="button"
                        buttonStyle="successOutline"
                        buttonSize="smallMobile"
                        minWidth="5rem"
                    >
                        <div>Cartes</div>
                    </Button>
                </StyledLink>
                {{ open } && (
                    <SideMenu
                        key="sidemenu01"
                        open={open}
                        setOpen={setOpen}
                        isTablet={isTablet}
                        setLeft={setLeft}
                        left={left}
                    />
                )}

                <Link to={'/ma-destination'}>
                    <Button
                        type="button"
                        buttonStyle="successSolid"
                        buttonSize="smallMobile"
                        minWidth="8rem"
                    >
                        <div>Ma Destination</div>
                    </Button>
                </Link>
            </NavLinks>
            <BurgerMenu
                open={open}
                setOpen={setOpen}
                isTablet={isTablet}
                setLeft={setLeft}
                left={left}
            />
        </HeaderContainer>
    );
}

export default Header;
