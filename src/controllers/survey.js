import survey from "../models/survey";

export const getSurvey = () => {
    const questionsSurvey = survey.map((element, index) => {
        return {
            questionNumber: index,
            questionBody: element.question,
            answers: element.answers,
        };
    });
    return questionsSurvey;
};

export const getSurveyById = (id) => {
    const index = parseInt(id);
    const question = survey[index];
    return question;
};
