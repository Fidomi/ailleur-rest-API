const survey = require("../models/survey");

exports.getSurvey = function () {
    const questionsSurvey = survey.map((element, index) => {
        return {
            questionNumber: index,
            questionBody: element.question,
            answers: element.answers,
        };
    });
    return questionsSurvey;
};

exports.getSurveyById = function (id) {
    const index = parseInt(id);
    const question = survey[index];
    return question;
};
