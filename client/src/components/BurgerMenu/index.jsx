/* eslint-disable sort-imports */
import React from 'react';
import { BurgerMenuWrapper, BurgerLine, MenuWrapper } from './style';
import PropTypes from 'prop-types';
import SideMenu from '../SideMenu/index';

const BurgerMenu = (props) => (
    <MenuWrapper>
        <BurgerMenuWrapper
            open={props.open}
            onClick={() => props.setOpen(!props.open)}
        >
            <BurgerLine open={props.open}></BurgerLine>
            <BurgerLine open={props.open}></BurgerLine>
            <BurgerLine open={props.open}></BurgerLine>
        </BurgerMenuWrapper>
        <SideMenu
            key="sidemenu02"
            open={props.open}
            setOpen={props.setOpen}
            isTablet={props.isTablet}
            setLeft={props.setLeft}
            left={props.left}
        />
    </MenuWrapper>
);

export default BurgerMenu;

BurgerMenu.propTypes = {
    isTablet: PropTypes.bool,
    left: PropTypes.bool,
    open: PropTypes.bool.isRequired,
    setLeft: PropTypes.any,
    setOpen: PropTypes.any
};
