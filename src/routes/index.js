import express from "express";
import { validationResult, param, query } from "express-validator";
import { getDepartementWithId } from "../controllers/departements";
import { getMapWithName } from "../controllers/maps";
// import { getSurvey } from "../controllers/survey";
// import { getResults } from "../controllers/results";

const router = express.Router();

router.get(
    "/departement/:id",
    [
        param("id")
            .isAlphanumeric()
            .withMessage("Only letters and digits allowed in id")
            .trim()
            .isLength({ max: 3 })
            .withMessage("Id must be 2 or 3 characters"),
    ],
    function (req, res) {
        const id = req.params.id;
        //Validation params
        const result = validationResult(req);
        if (!result.isEmpty()) {
            res.render("error_unvalid_routeParam", {
                error: result.array(),
            });
        }
        const departementData = getDepartementWithId(id);
        if (!departementData) {
            res.status(400).send("Not found.");
        } else {
            res.send({ departementData });
        }
    }
);

router.get(
    "/maps/:name",
    [
        param("name")
            .isIn(["security", "environment", "family"])
            .withMessage("Not a valid route parameter."),
    ],
    function (req, res) {
        const name = req.params.name;
        //Validation params
        const result = validationResult(req);
        if (!result.isEmpty()) {
            res.render("error_unvalid_routeParam", {
                error: result.array(),
            });
        }
        const mapData = getMapWithName(name);
        if (!mapData) {
            res.status(404).send("Not found.");
        } else {
            res.send({ mapData });
        }
    }
);

router.get("/", function (req, res, next) {
    res.render("index", { title: "Ailleurs's REST API" });
});

export default router;
