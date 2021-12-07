const departementData = require("../models/departements");
const {
    securityResults,
    environmentResults,
    familyResults,
} = require("./maps");
const {
    securityWeights,
    environmentWeights,
    familyWeights,
} = require("./weights");

exports.getMyMap = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
    const [famWeight1, famWeight2, famWeight3] = familyWeights(a0, a1, a2);
    const [secWeight1, secWeight2, secWeight3] = securityWeights(a3, a4, a5);
    const [envWeight1, envWeight2, envWeight3] = environmentWeights(a6, a7, a8);
    const family_results = familyResults(famWeight1, famWeight2, famWeight3);
    const security_results = securityResults(
        secWeight1,
        secWeight2,
        secWeight3
    );
    const environment_results = environmentResults(
        envWeight1,
        envWeight2,
        envWeight3
    );

    const result = departementData.map((element) => {
        const family = family_results.find(
            (ele) => ele.dep_id === element.num_dep
        );
        const security = security_results.find(
            (ele) => ele.dep_id === element.num_dep
        );
        const environment = environment_results.find(
            (ele) => ele.dep_id === element.num_dep
        );
        return {
            dep_id: element.num_dep,
            dep_name: element.dep_name,
            result: (
                (parseFloat(environment.environmental_health) +
                    parseFloat(family.daily_life_confort) +
                    parseFloat(security.danger_total)) /
                3
            ).toFixed(3),
        };
    });
    result.sort((a, b) => a.result - b.result).reverse();

    return result;
};
