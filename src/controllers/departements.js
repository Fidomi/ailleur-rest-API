const departementData = require("../models/departements");

const getDepartementWithId = (id) => {
    return departementData.find(
        (departement) => departement.num_dep === id.toString()
    );
};

module.exports = getDepartementWithId;
