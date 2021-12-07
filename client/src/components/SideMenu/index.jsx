/* eslint-disable sort-imports */
/* eslint-disable indent */
import { Accordion, AccordionSection } from '../Accordion/index';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledSideMenu } from './style';
import { menuCategories as sideCategories } from '../../data/menuCategories';

const SideMenu = (props) => (
    <StyledSideMenu
        open={props.open}
        onMouseLeave={() => {
            props.setLeft(true);
        }}
        onMouseEnter={() => {
            props.setLeft(false);
        }}
    >
        <AccordionSection>
            {sideCategories.map((sideCategory) => (
                <Accordion
                    open={props.open}
                    setOpen={props.setOpen}
                    key={sideCategory.id}
                    subcategories={
                        sideCategory.subcategories
                            ? sideCategory.subcategories
                            : null
                    }
                    url={sideCategory.url ? sideCategory.url : null}
                    accordionTitle={sideCategory.name}
                    left={props.left}
                >
                    {sideCategory.name}
                </Accordion>
            ))}
        </AccordionSection>
    </StyledSideMenu>
);
SideMenu.propTypes = {
    isTablet: PropTypes.bool,
    left: PropTypes.bool,
    open: PropTypes.bool.isRequired,
    setLeft: PropTypes.any,
    setOpen: PropTypes.any
};

export default SideMenu;
