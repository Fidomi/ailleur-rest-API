import departementData from "../models/departements";

export const getDepartementWithId = (id) => {
    return departementData.find(
        (departement) => departement.num_dep === id.toString()
    );
};
