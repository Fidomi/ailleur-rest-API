import departementData from "../models/departements";

const securityResults = () => {
    const security_results = departementData.reduce((acc, curValue) => {
        const weighted_average =
            (curValue.num_assaults * 100 + curValue.num_burglaries * 100) /
                (2 * curValue.total_population) +
            curValue.num_healthCenters_10000_inhabitants;

        const result = {
            dep_id: curValue.num_dep,
            dep_name: curValue.dep_name,
            danger_total: weighted_average.toFixed(2),
        };
        acc.push(result);
        return acc;
    }, []);
    security_results.sort((a, b) => a.danger_total - b.danger_total);
    return security_results;
};

const environmentResults = () => {
    const environment_results = departementData.reduce((acc, curValue) => {
        const nuclear_threat = curValue.num_nuclear_reactor
            ? curValue.num_nuclear_reactors
            : 0;
        const organic_farming = curValue.organic_farming_ratio.split("");
        organic_farming.pop();
        let organicRatio = isNaN(
            parseFloat(organic_farming.join("")).toFixed(2) * 100
        )
            ? 0
            : parseFloat(organic_farming.join("")).toFixed(2) * 100;

        const weighted_average =
            (organicRatio / curValue.total_population +
                (curValue.sunlight_hours * 100) / 3000 +
                (nuclear_threat * 100) / curValue.total_population) /
            3;

        const result = {
            dep_id: curValue.num_dep,
            dep_name: curValue.dep_name,
            environmental_health: weighted_average.toFixed(2),
        };
        acc.push(result);
        return acc;
    }, []);
    environment_results.sort(
        (a, b) => a.environmental_health - b.environmental_health
    );
    return environment_results;
};

const familyResults = () => {
    const family_results = departementData.reduce((acc, curValue) => {
        const weighted_average =
            (parseFloat(curValue.fiber_ratio) +
                (parseFloat(curValue.rideAverageTime) * 100) / 45 +
                (curValue.schools_number * 100) / curValue.total_population) /
            3;

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

export const getMapWithName = (name) => {
    switch (name) {
        case "security":
            return securityResults();
        case "environment":
            return environmentResults();
        case "family":
            return familyResults();
        default:
            throw new Error(`The case "${name}" doesn't exist.`);
    }
};
