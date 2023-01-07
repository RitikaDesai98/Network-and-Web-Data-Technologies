// Route handlers
const express = require("express");
const router = express.Router();

//import data models
const Student = require("../models/students.js");
const Course = require("../models/courses.js");
const Building = require("../models/buildings.js");

//GET all resources
router.get("/all", function (req, res) {
  Promise.all([Student.find({}), Course.find({}), Building.find({})]).then(
    (returnedValues) => {
      res.send(returnedValues);
    }
  );
});

//GET all students
router.get("/students", function (req, res) {
  Student.find({}, function (err, student_list) {
    res.render("../views/students.ejs", { students: student_list });
  });
});

//GET all courses
router.get("/courses", function (req, res) {
  Course.find({}, function (err, course_list) {
    res.render("../views/courses.ejs", { courses: course_list });
  });
});

//GET all buildings
router.get("/buildings", function (req, res) {
  Building.find({}, function (err, building_list) {
    res.render("../views/buildings.ejs", { buildings: building_list });
  });
});

router.get("/add-student", function (req, res) {
  res.render("../views/addStudent.ejs");
});

router.get("/edit-student/:id", function (req, res) {
  Student.findById(req.params.id, function (err, student) {
    res.render("../views/editStudent.ejs", {
      student: student,
    });
  });
});

//CREATE
router.post("/student", function (req, res) {
  const student = new Student({
    student_id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    courses: {
      course1: req.body.course1,
      course2: req.body.course2,
      course3: req.body.course3,
    },
  });
  student.save();
  res.redirect("/api/students");
});

router.delete("/student/:id", (req, res) => {
  Student.findByIdAndDelete(req.params.id, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("Deleted : ", docs);
    }
  });
  res.redirect("/api/students");
});

router.put("/student/:id", (req, res) => {
  Student.findById(req.params.id, function (err, student) {
    (student.student_id = req.body.id),
      (student.first_name = req.body.first_name),
      (student.last_name = req.body.last_name),
      student.courses.forEach(function (course) {
        (course.course1 = req.body.course1),
          (course.course2 = req.body.course2),
          (course.course3 = req.body.course3);
      });
    student.save();
    res.redirect("/api/students");
  });
});

router.get("/student/:id", function (req, res) {
  Student.findById(req.params.id, function (err, student) {
    res.render("../views/student.ejs", {
      student: student,
    });
  });
});

router.get("/add-course", function (req, res) {
  res.render("../views/addCourse.ejs");
});

//CREATE
router.post("/course", function (req, res) {
  const course = new Course({
    course_id: req.body.id,
    name: req.body.course_name,
    instructor: req.body.instructor,
    meeting_day: req.body.day,
    meeting_time: req.body.time,
    building: req.body.building,
  });
  course.save();
  res.redirect("/api/courses");
});

router.delete("/course/:id", (req, res) => {
  Course.findByIdAndDelete(req.params.id, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("Deleted : ", docs);
    }
  });
  res.redirect("/api/courses");
});

router.get("/edit-course/:id", function (req, res) {
  Course.findById(req.params.id, function (err, course) {
    res.render("../views/editCourse.ejs", {
      course: course,
    });
  });
});

router.put("/course/:id", (req, res) => {
  Course.findById(req.params.id, function (err, course) {
    (course.course_id = req.body.id),
      (course.name = req.body.course_name),
      (course.instructor = req.body.instructor),
      (course.meeting_day = req.body.day),
      (course.meeting_time = req.body.time),
      (course.building = req.body.building);
    course.save();
    res.redirect("/api/courses");
  });
});

router.get("/course/:id", function (req, res) {
  Course.findOne({ course_id: req.params.id }, function (err, course) {
    res.render("../views/course.ejs", {
      course: course,
    });
  });
});

router.get("/add-building", function (req, res) {
  res.render("../views/addBuilding.ejs");
});

router.post("/building", function (req, res) {
  const building = new Building({
    building_id: req.body.id,
    name: req.body.building_name,
    address: req.body.address,
    zipcode: req.body.zipcode,
  });
  building.save();
  res.redirect("/api/buildings");
});

router.delete("/building/:id", (req, res) => {
  Building.findByIdAndDelete(req.params.id, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("Deleted : ", docs);
    }
  });
  res.redirect("/api/buildings");
});

router.get("/edit-building/:id", function (req, res) {
  Building.findById(req.params.id, function (err, building) {
    res.render("../views/editBuilding.ejs", {
      building: building,
    });
  });
});

router.put("/building/:id", (req, res) => {
  Building.findById(req.params.id, function (err, building) {
    (building.building_id = req.body.id),
      (building.name = req.body.building_name),
      (building.address = req.body.address),
      (building.zipcode = req.body.zipcode),
      building.save();
    res.redirect("/api/buildings");
  });
});

router.get("/building/:id", function (req, res) {
  Building.findOne({ building_id: req.params.id }, function (err, building) {
    res.render("../views/building.ejs", {
      building: building,
    });
  });
});

router.get("/building-course", function (req, res) {
  Building.find({}, function (err, buildings) {
    res.render("../views/selectBuilding.ejs", {
      buildings: buildings,
    });
  });
});

router.post("/get-courses", function (req, res) {
  Course.find({ building: req.body.building_id }, function (err, course_list) {
    res.render("../views/getCourses.ejs", { courses: course_list });
  });
});

//GET student courses by student ID
router.get("/student/:id/courses", function (req, res, next) {
  Student.findOne(
    { student_id: req.params.id },
    function (err, student) {
      try{
        let results = {
          id: req.params.id,
          course1: student.courses[0].course1,
          course2: student.courses[0].course2,
          course3: student.courses[0].course3
        };
        return res.json(results);
      } catch(error) {
        next(new Error("failed to load resource"));
      }
    }
  );
});

router.all("*", function (req, res) {
  throw new Error("Bad request");
});

router.use(function (e, req, res, next) {
  res
    .status(400)
    .json({ code: 400, error: e.message, message: "Incorrect URL" });
});

module.exports = router;
