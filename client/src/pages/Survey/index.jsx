import {
    Background,
    GroupButtons,
    SetOfQuestions,
    SurveyContainer,
    Text
} from './style';
import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { SurveyProvider } from '../../utils/context/index';
import StyledLink from '../../components/StyledLink/index';
import SurveyQuestion from '../../components/SurveyQuestion';

export const createSetOfQuestions = (pageNum) => {
    let setOfQuestions = [];
    switch (pageNum) {
        case 1:
            setOfQuestions = [0, 1, 2];
            break;
        case 2:
            setOfQuestions = [3, 4, 5];
            break;
        case 3:
            setOfQuestions = [6, 7, 8];
            break;
        default:
            setOfQuestions = [0, 1, 2];
    }
    return setOfQuestions;
};

const Survey = () => {
    const [surveyPage, setSurveyPage] = useState(1);

    return (
        <SurveyProvider>
            <Background page={surveyPage}>
                <SurveyContainer>
                    <Text>
                        <h3>Votre Profil</h3>
                        Entrez quelques informations sur votre situation
                        personnelle et vos préférences de vie, afin que l’on
                        détermine quels sont les critères importants et ceux qui
                        le sont moins.
                    </Text>
                    <SetOfQuestions>
                        {createSetOfQuestions(surveyPage).map((question) => (
                            <SurveyQuestion
                                key={`id_${question}`}
                                questionNumber={question}
                            />
                        ))}
                    </SetOfQuestions>
                    <GroupButtons>
                        {surveyPage > 1 && surveyPage <= 3 && (
                            <Button
                                onClick={() => {
                                    setSurveyPage(surveyPage - 1);
                                }}
                                buttonSize="medMobile"
                                buttonStyle="primarySolid"
                                minWidth="8rem"
                                type="button"
                            >
                                <div>PREV</div>
                            </Button>
                        )}
                        {surveyPage >= 1 && surveyPage < 3 && (
                            <Button
                                onClick={() => setSurveyPage(surveyPage + 1)}
                                buttonSize="medMobile"
                                buttonStyle="primarySolid"
                                minWidth="8rem"
                                type="button"
                            >
                                <div>SUIVANT</div>
                            </Button>
                        )}
                        {surveyPage === 3 && (
                            <StyledLink to="/ma-destination/resultats">
                                <Button
                                    buttonSize="medMobile"
                                    buttonStyle="secondarySolid"
                                    minWidth="8rem"
                                >
                                    <div>OK</div>
                                </Button>
                            </StyledLink>
                        )}
                    </GroupButtons>
                </SurveyContainer>
            </Background>
        </SurveyProvider>
    );
};

export default Survey;
