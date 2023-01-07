const express = require("express");
const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile-routes");
const messageRoutes = require("./routes/message-routes");
const passportSetup = require("./config/passport-setup");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();

const mongoDB =
  "mongodb+srv://" +
  process.env.username +
  ":" +
  process.env.password +
  "@" +
  process.env.host +
  "/" +
  process.env.database;
mongoose.connect(mongoDB, { useNewUrlParser: true, retryWrites: true });

app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: [process.env.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {user: req.user});
});

app.use(express.static("views"));

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.use("/chat", messageRoutes);


var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
