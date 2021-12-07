/**
 * Module dependencies.
 */

const express = require("express");
const createError = require("http-errors");
const path = require("path");
const indexRouter = require("./src/routes/index");
const cors = require("cors");

const app = express();
const PROJECT_DIR = __dirname;

// View Engine setup
app.set("views", path.join(PROJECT_DIR, "/src/views"));
app.set("view engine", "pug");

//*******Use of middlewares

app.use(express.static(path.join(PROJECT_DIR, "/public")));

// Have Node serve the files for our built React app
//app.use(express.static(path.resolve(PROJECT_DIR, "/frontend/build")));

//set the headers to Access-Control-Allow-Origin: *
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use(function (req, res, next) {
    setTimeout(next, Math.floor(Math.random() * 2000 + 100));
});

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404, "Page not found"));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
