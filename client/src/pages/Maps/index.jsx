import {
    CardsContainer,
    MapsContainer,
    HeroText,
    HeroTextTitle
} from './style';
import { menuCategories } from '../../data/menuCategories';
import Card from '../../components/Card';
import React from 'react';

function Maps() {
    return (
        <MapsContainer>
            <HeroText>
                <HeroTextTitle>Nos carte thématiques</HeroTextTitle>
                <br />
                Ailleurs propose des cartes thématiques de la France élaborées à
                partir des données recueillies auprès de data.gouv.fr.
                <br />
                {`L'interprétation de ces données est tout à fait subjective et
                les résultats exposés ici ne tendent pas à démontrer quoique ce
                soit.`}
            </HeroText>
            <CardsContainer>
                {menuCategories[0].subcategories.map((category, index) => (
                    <Card
                        key={`${category.name}-${index}`}
                        link={category.url}
                        picture={category.imagePath}
                        logo={category.logoPath}
                        title={category.name}
                    />
                ))}
            </CardsContainer>
        </MapsContainer>
    );
}

export default Maps;
