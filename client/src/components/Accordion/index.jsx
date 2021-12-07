/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/* eslint-disable no-undefined */
/* eslint-disable no-unused-expressions */
/* eslint-disable sort-keys */
/* eslint-disable sort-imports */
import { useEffect, useState, React } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {
    AccordionIcon,
    AccordionItem,
    AccordionList,
    AccordionTitle,
    AccordionWrapper,
    StyledAccordionSection,
    StyledLink
} from './style.js';
import PropTypes from 'prop-types';

export const Accordion = (props) => {
    const [chevronOpen, setChevronOpen] = useState(0);
    useEffect(() => {
        props.left ? setChevronOpen(0) : setChevronOpen(1);
    }, [props.left]);
    return (
        <AccordionWrapper open={props.open}>
            {props.subcategories !== null && (
                <AccordionTitle>
                    <StyledLink to={props.url}>
                        {props.accordionTitle}
                    </StyledLink>
                    <AccordionIcon
                        chevronopen={props.open ? chevronOpen : undefined}
                        onClick={() => {
                            chevronOpen === 0
                                ? setChevronOpen(1)
                                : setChevronOpen(0);
                        }}
                        icon={faChevronDown}
                    />
                </AccordionTitle>
            )}
            {props.url !== null && props.subcategories === null && (
                <AccordionTitle>
                    <StyledLink to={props.url}>
                        {props.accordionTitle}
                    </StyledLink>
                </AccordionTitle>
            )}

            <AccordionList chevronopen={props.open ? chevronOpen : undefined}>
                {props.subcategories &&
                    props.subcategories.map((subcategory) => (
                        <AccordionItem
                            key={subcategory.id}
                            chevronopen={props.open ? chevronOpen : undefined}
                        >
                            <StyledLink to={subcategory.url}>
                                {subcategory.name}
                            </StyledLink>
                        </AccordionItem>
                    ))}
            </AccordionList>
        </AccordionWrapper>
    );
};
export function AccordionSection(props) {
    return <StyledAccordionSection>{props.children}</StyledAccordionSection>;
}

Accordion.propTypes = {
    accordionTitle: PropTypes.string.isRequired,
    left: PropTypes.bool,
    // Todo : correct "any" type
    subcategories: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
    url: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
    open: PropTypes.bool,
    setOpen: PropTypes.func
};

AccordionSection.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
