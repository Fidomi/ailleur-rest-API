import { HeroText, HeroTextTitle, HomeContainer } from './style';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import React from 'react';

function Home() {
    return (
        <HomeContainer>
            <HeroText>
                <HeroTextTitle>
                    Envie de partir vivre ailleurs?
                    <br />
                    On vous aide à trouver la destination qui vous convient.
                </HeroTextTitle>
                <Link to="/ma-destination">
                    <Button
                        type="button"
                        buttonStyle="secondarySolid"
                        buttonSize="medMobile"
                    >
                        Trouver ma destination
                    </Button>
                </Link>
            </HeroText>
        </HomeContainer>
    );
}

export default Home;
