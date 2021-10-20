import express from "express";
import { validationResult, param, query } from "express-validator";
import { getDepartementWithId } from "../controllers/departements";
import { getMapWithName } from "../controllers/maps";
import { getSurvey, getSurveyById } from "../controllers/survey";
import { getMyMap } from "../controllers/myMap";

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
        const mapData =
            name === "environment"
                ? getMapWithName(name, 10, 3, 2)
                : getMapWithName(name, 1, 1, 1);
        if (!mapData) {
            res.status(404).send("Not found.");
        } else {
            res.send({ mapData });
        }
    }
);

router.get("/survey", function (req, res) {
    const surveyData = getSurvey();
    if (!surveyData) {
        res.status(404).send("Not found.");
    } else {
        res.send({ surveyData });
    }
});

router.get(
    "/survey/:id",
    [
        param("id")
            .isNumeric()
            .matches(/[0-8]/)
            .withMessage("Not a valid survey number."),
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
        const surveyQuestion = getSurveyById(id);
        if (!surveyQuestion) {
            res.status(404).send("Not found.");
        } else {
            res.send({ surveyQuestion });
        }
    }
);

router.get(
    "/mymap",
    [
        query(["a0", "a2", "a3", "a5", "a7", "a8"])
            .isNumeric()
            .matches(/[0-2]/)
            .withMessage(
                "Answers a0, a2, a3, a5, a7 and a8 must have a value of 0, 1 or 2."
            ),
        query(["a1", "a4", "a6"])
            .isNumeric()
            .matches(/[0-3]/)
            .withMessage(
                "Answers a1, a4, and a6 must have a value of 0, 1, 2 or 3."
            ),
        // query("a1", "a4", "a6")
        //     .isIn(["0", "1", "2", "3"])
        //     .withMessage("Answers are 0 or 1 or 2 eventually 3."),
    ],
    function (req, res) {
        const { a0, a1, a2, a3, a4, a5, a6, a7, a8 } = req.query;
        const result = validationResult(req);
        console.log("result>>>>>>>", a4);
        if (!result.isEmpty()) {
            res.render("error_unvalid_routeParam", {
                error: result.array(),
            });
        }
        const myMapData = getMyMap(a0, a1, a2, a3, a4, a5, a6, a7, a8);
        if (!myMapData) {
            res.status(404).send("Not found.");
        } else {
            res.send({ myMapData });
        }
    }
);

router.get("/", function (req, res, next) {
    res.render("index", { title: "Ailleurs's REST API" });
});

export default router;
