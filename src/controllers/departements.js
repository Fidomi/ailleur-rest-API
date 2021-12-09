const departementData = require("../models/departements");

exports.getDepartementWithId = function (id) {
    console.log("id", id);
    const mydepartement = departementData.find(
        (departement) => departement.num_dep === id.toString()
    );
    return mydepartement;
};
