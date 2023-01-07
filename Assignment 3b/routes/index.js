// Route handlers
const express = require("express");
const router = express.Router();

//import data models
const Student = require("../models/students.js");
const Course = require("../models/courses.js");
const Building = require("../models/buildings.js");

// RETREIVE all books
router.get("/", function (req, res) {
  res.render("index.ejs");
});

module.exports = router;
