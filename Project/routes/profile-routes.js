const router = require("express").Router();
const User = require("../models/user.js");

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.redirect("/auth/login")
  } else {
    next();
  }
};

router.get("/",authCheck,  (req, res) => {
  res.render("profile", {user: req.user});
});

router.get("/change-name", (req,res) => {
  res.render("changeName", {user: req.user})
})

router.put("/change-name/:id", (req, res) => {
  User.findById(req.params.id, function (err, user) {
      (user.username = req.body.displayName),
      user.save();
    res.redirect("/profile");
  });
});


module.exports = router;
