import departementData from "../models/departements";

export const securityResults = (weight1, weight2, weight3) => {
    const security_results = departementData.reduce((acc, curValue) => {
        const weighted_average =
            (weight1 *
                (100 -
                    (100 * (parseFloat(curValue.num_assaults) * 100)) /
                        curValue.total_population) +
                weight2 *
                    (100 -
                        (100 * (parseFloat(curValue.num_burglaries) * 100)) /
                            curValue.total_population) +
                weight3 * curValue.num_healthCenters_10000_inhabitants) /
            (weight1 + weight2 + weight3);

        const result = {
            dep_id: curValue.num_dep,
            dep_name: curValue.dep_name,
            danger_total: ((weighted_average * 100) / 75).toFixed(2),
        };
        acc.push(result);
        return acc;
    }, []);
    security_results.sort((a, b) => a.danger_total - b.danger_total);
    return security_results;
};

export const environmentResults = (weight1, weight2, weight3) => {
    const environment_results = departementData.reduce((acc, curValue) => {
        const nuclear_threat = curValue.num_nuclear_reactor
            ? curValue.num_nuclear_reactors
            : 0;
        const nuclear_safety = (100 - nuclear_threat * 100) / 16;
        const organic_farming = curValue.organic_farming_ratio.split("");
        organic_farming.pop();
        let organicRatio = isNaN(
            parseFloat(organic_farming.join("")).toFixed(2)
        )
            ? 0
            : parseFloat(organic_farming.join("")).toFixed(2);

        const weighted_average =
            (weight1 * organicRatio +
                (weight2 * (curValue.sunlight_hours * 100)) / 3000 +
                weight3 * nuclear_safety) /
            (weight1 + weight2 + weight3);

        const result = {
            dep_id: curValue.num_dep,
            dep_name: curValue.dep_name,
            environmental_health: ((weighted_average * 100) / 40).toFixed(2),
        };
        acc.push(result);
        return acc;
    }, []);
    environment_results.sort(
        (a, b) => a.environmental_health - b.environmental_health
    );
    return environment_results;
};

export const familyResults = (weight1, weight2, weight3) => {
    const family_results = departementData.reduce((acc, curValue) => {
        const weighted_average =
            (weight1 * parseFloat(curValue.fiber_ratio) +
                weight2 *
                    (100 - (parseFloat(curValue.rideAverageTime) * 100) / 60) +
                (weight3 *
                    ((curValue.schools_number * 100) /
                        curValue.total_population) *
                    100) /
                    0.15) /
            (weight1 + weight2 + weight3);

        const result = {
            dep_id: curValue.num_dep,
            dep_name: curValue.dep_name,
            daily_life_confort: weighted_average.toFixed(2),
        };
        acc.push(result);
        return acc;
    }, []);
    family_results.sort((a, b) => a.daily_life_confort - b.daily_life_confort);
    return family_results.reverse();
};

export const getMapWithName = (name, weight1, weight2, weight3) => {
    switch (name) {
        case "security":
            return securityResults(weight1, weight2, weight3);
        case "environment":
            return environmentResults(weight1, weight2, weight3);
        case "family":
            return familyResults(weight1, weight2, weight3);
        default:
            throw new Error(`The case "${name}" doesn't exist.`);
    }
};
