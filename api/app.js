require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const availability = require("./routes/availabilityRoute");
const reservation = require("./routes/reservationRoute");
const cors = require("cors");

console.log(availability);
console.log(process.env.MONGO_URL);
//Mongo DB
mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/availability", availability);
app.use("/reservation", reservation);

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected DB");
});

module.exports = app;
