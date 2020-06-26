var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const { Table } = require("reactstrap");

const Day = require("../models/Day").model;
const Reservation = require("../models/Reservation").model;

// Parameters
//Date
// Table
// name
// phone
// email

/* GET home page. */
router.post("/", function (req, res, next) {
  res.status(200).send("All Good");
  Day.find({ date: req.body.date }, (err, days) => {
    if (!err) {
      if (days.length > 0) {
        let days = days[0];
        days.tables.forEach((table) => {
          if (table._id == req.body.table) {
            //Connect table is table
            table.reservation = new Reservation({
              name: req.body.name,
              phone: req.body.phone,
              email: req.body.email,
            });
            table.isAvailable = false;
            days.save((err) => {
              if (err) {
                console.log(err);
              } else {
                console.log("reserved");
                res.status(200).send("Added Reservation");
              }
            });
          }
        });
      }
    } else {
      console.log("Day not found");
    }
  });
});

module.exports = router;
