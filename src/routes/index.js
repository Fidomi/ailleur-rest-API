const express = require("express");
const path = require("path");
const { validationResult, param, query } = require("express-validator");
const { getDepartementWithId } = require("../controllers/departements");
const { getMapWithName } = require("../controllers/maps");
const { getSurvey, getSurveyById } = require("../controllers/survey");
const { getMyMap } = require("../controllers/myMap");

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
            res.status(404).send("Not found.");
        } else {
            res.send([departementData]);
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
            return;
        }
        const mapData = getMapWithName(name);
        if (!mapData) {
            // res.status(404).send("Not found.");
            res.sendStatus(404).withMessage("Not found.");
            return;
        } else {
            res.send(mapData);
        }
    }
);

const handleQueries = function (req, res, next) {
    if (!req.query.questionNumber) {
        return next();
    } else {
        const questionNumber = req.query.questionNumber;
        parseInt(questionNumber.trim());
        if (questionNumber < 0 || questionNumber > 8) {
            res.render("error_unvalid_routeParam", {
                error: [
                    {
                        msg: "Not a valid question number",
                        value: questionNumber,
                        param: "questionNumber",
                    },
                ],
            });
        }
        const questionData = getSurveyById(questionNumber);
        res.send([questionData]);
    }
};

router.get("/survey", handleQueries, function (req, res) {
    const survey = getSurvey();
    if (!survey) {
        res.status(404).send("Not found.");
    } else {
        res.send(survey);
    }
});

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
    ],
    function (req, res) {
        const { a0, a1, a2, a3, a4, a5, a6, a7, a8 } = req.query;
        const result = validationResult(req);
        if (!result.isEmpty()) {
            res.render("error_unvalid_routeParam", {
                error: result.array(),
            });
            return;
        }
        const myMapData = getMyMap(a0, a1, a2, a3, a4, a5, a6, a7, a8);
        if (!myMapData) {
            res.sendStatus(404).withMessage("Not found.");
            return;
        } else {
            res.send(myMapData);
        }
    }
);

router.get("/api", function (req, res, next) {
    res.render("index", { title: "Ailleurs's REST API" });
});

router.use("/", express.static(path.resolve(__dirname, "../../client/build/")));

// All other GET requests not handled before will return our React app
router.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../client/build", "index.html"));
});

module.exports = router;
