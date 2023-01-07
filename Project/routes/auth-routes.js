const router = require("express").Router();
const passport = require("passport");

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.redirect("/auth/login")
  } else {
    next();
  }
};

router.get("/login", (req, res) => {
  res.render("login");
})

router.get("/google", passport.authenticate("google", {
  scope: ['profile', 'email']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect("/profile")
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect("/");
})

module.exports = router;