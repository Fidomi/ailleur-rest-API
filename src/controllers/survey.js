import survey from "../models/survey";

export const getSurvey = () => {
    const questionsSurvey = survey.map((element) => element.question);
    return questionsSurvey;
};

export const getSurveyById = (id) => {
    const index = parseInt(id);
    const question = survey[index].question;
    return question;
};
