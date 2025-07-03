const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const { rateLimit } = require("express-rate-limit");
const app = express();
const errorHandler = require("./src/errors/errorBoundary")
const userFormRouter = require("./src/routes/userFormRoute")
require("dotenv").config();

// global middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// security middlewares

app.use(helmet());

const corsOptions = {
  origins: ["http://localhost:5730"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  // store: ... ,
});

app.use(limiter);

// route middleware
app.use("/userForm", userFormRouter)


// global error handler

app.use(errorHandler)

module.exports = app;
