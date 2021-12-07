/* eslint-disable no-unused-vars */
import { RefiningContainer, RefiningCategory, RefiningItem } from './style';
import React from 'react';
import { Button } from '../../components/Button';
import REFINING_ELEMENTS from '../../data/affinage';
import StyledLink from '../../components/StyledLink/index';
import Weight from '../../components/Weight/index';

const Refining = () => {
    const elements = REFINING_ELEMENTS;
    return (
        <RefiningContainer>
            <p>Affinez les critères selon vos priorités:</p>
            {elements.map((element, index) => (
                <RefiningCategory key={`${element.name}-${index}`}>
                    <div className="title">
                        <img
                            src={element.logoPath}
                            alt={element.name + '_logo'}
                        />
                        <h2>{element.name}</h2>
                    </div>
                    {element.subcategories.map((ele, i) => (
                        <RefiningItem key={`${ele.category_id}`}>
                            <div className="subTitle">
                                <img
                                    src={ele['category_logo']}
                                    alt={ele['category_title'] + '_logo'}
                                />
                                <h3>{ele['category_title']}</h3>
                            </div>
                            <div className="description">
                                {ele['category_description']}
                            </div>
                            <Weight id={ele.category_id} />
                        </RefiningItem>
                    ))}
                </RefiningCategory>
            ))}
            <StyledLink to="/ma-destination/resultats">
                <div>
                    <Button
                        buttonSize="smallMobile"
                        buttonStyle="primarySolid"
                        minWidth="8rem"
                    >
                        <div>VALIDER</div>
                    </Button>
                </div>
            </StyledLink>
        </RefiningContainer>
    );
};

export default Refining;
