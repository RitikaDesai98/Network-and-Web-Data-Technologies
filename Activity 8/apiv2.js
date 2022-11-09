const express = require("express");
const zipdb = require("zippity-do-dah");
const weather = require("openweather-apis");

const APIKEY = process.env.OPENWEATHER_KEY;

const api = express.Router();

api.get("/temp", function (request, response) {
  response.json({
    help: "Use a zip code to get the temperature",
  });
});

api.get("/description", function (request, response) {
  response.json({
    help: "Use a zip code to get the description",
  });
});

api.get("/windchill", function (request, response) {
  response.json({
    help: "Use a zip code to get the windchill",
  });
});

api.get(/^\/temp\/(\d{5})$/, function (req, res, next) {
  var zipcode = req.params[0];
  var location = zipdb.zipcode(zipcode);
  if (!location.zipcode) {
    next();
    return;
  }
  var latitude = location.latitude;
  var longitude = location.longitude;
  weather.setLang("en");
  weather.setCoordinate(latitude, longitude);
  weather.setUnits("imperial");
  weather.setAPPID(APIKEY);
  weather.getTemperature(function (err, data) {
    let results = {
      zipcode: zipcode,
      temp: data,
    };
    res.json(results);
  });
});

api.get(/^\/description\/(\d{5})$/, function (req, res, next) {
  var zipcode = req.params[0];
  var location = zipdb.zipcode(zipcode);
  if (!location.zipcode) {
    next();
    return;
  }
  var latitude = location.latitude;
  var longitude = location.longitude;
  weather.setLang("en");
  weather.setCoordinate(latitude, longitude);
  weather.setUnits("imperial");
  weather.setAPPID(APIKEY);
  weather.getDescription(function (err, data) {
    let results = {
      zipcode: zipcode,
      description: data,
    };
    res.json(results);
  });
});

api.get(/^\/windchill\/(\d{5})$/, function (req, res, next) {
  var zipcode = req.params[0];
  var location = zipdb.zipcode(zipcode);
  if (!location.zipcode) {
    next();
    return;
  }
  var latitude = location.latitude;
  var longitude = location.longitude;
  weather.setLang("en");
  weather.setCoordinate(latitude, longitude);
  weather.setUnits("imperial");
  weather.setAPPID(APIKEY);
  weather.getAllWeather(function (err, data) {
    let results = {
      zipcode: zipcode,
      windchill: data["main"]["feels_like"],
    };
    res.json(results);
  });
});

api.use(function (req, res) {
  res.status(404).json({ error: "Zip code" });
});

module.exports = api;
