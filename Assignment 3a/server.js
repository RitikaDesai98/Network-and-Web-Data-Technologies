const express = require("express");
const app = express();

const student = require("./students");
const building = require("./buildings");

app.get("/", function (request, response) {
  response.json({
    message: "Please see the README.md for documentation",
  });
});

//Students

//GET all students
app.get("/students", function (request, response) {
  response.json(student.students);
});

//GET student by ID
app.get("/student/:id", function (request, response, next) {
  let id_param = request.params.id;
  let found = student.students.filter((element) => element.id == id_param);
  if (found.length != 0) {
    let results = {
      id: id_param,
      student: student.students.filter((element) => element.id == id_param),
    };
    return response.json(results);
  } else {
    next(new Error("failed to load resource"));
  }
});

//GET student courses by student ID
app.get("/student/:id/courses", function (request, response, next) {
  let id_param = request.params.id;
  let found = student.students.filter((element) => element.id == id_param);
  if (found.length != 0) {
    let results = {
      id: id_param,
      courses: student.students.filter((element) => element.id == id_param)[0][
        "courses"
      ],
    };
    return response.json(results);
  } else {
    next(new Error("failed to load resource"));
  }
});

//POST student
app.post("/student", function (req, res) {
  res.sendStatus(201);
});

//PUT student by ID
app.put("/student/:id", function (request, response, next) {
  let id_param = request.params.id;
  let found = student.students.filter((element) => element.id == id_param);
  if (found.length != 0) {
    return response.sendStatus(200);
  } else {
    next(new Error("failed to load resource"));
  }
});

//DELETE student by ID
app.delete("/student/:id", function (request, response, next) {
  let id_param = request.params.id;
  let found = student.students.filter((element) => element.id == id_param);
  if (found.length != 0) {
    return response.sendStatus(200);
  } else {
    next(new Error("failed to load resource"));
  }
});

//Buildings

//GET all buildings
app.get("/buildings", function (request, response) {
  response.json(building.buildings);
});

//GET building by ID
app.get("/building/:id", function (request, response, next) {
  let id_param = request.params.id;
  let found = building.buildings.filter((element) => element.id == id_param);
  if (found.length != 0) {
    let results = {
      id: id_param,
      building: building.buildings.filter((element) => element.id == id_param),
    };
    return response.json(results);
  } else {
    next(new Error("failed to load resource"));
  }
});

//POST building
app.post("/building", function (req, res) {
  console.log("new building", req.body);
  res.sendStatus(201);
});

//PUT building by ID
app.put("/building/:id", function (request, response, next) {
  let id_param = request.params.id;
  let found = building.buildings.filter((element) => element.id == id_param);
  if (found.length != 0) {
    return response.sendStatus(200);
  } else {
    next(new Error("failed to load resource"));
  }
});

//DELETE building by ID
app.delete("/building/:id", function (request, response, next) {
  let id_param = request.params.id;
  let found = building.buildings.filter((element) => element.id == id_param);
  if (found.length != 0) {
    return response.sendStatus(200);
  } else {
    next(new Error("failed to load resource"));
  }
});

//Error handling

app.all("*", function (req, res) {
  throw new Error("Bad request");
});

app.use(function (e, req, res, next) {
  res
    .status(400)
    .json({ code: 400, error: e.message, message: "Incorrect URL" });
});

const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
