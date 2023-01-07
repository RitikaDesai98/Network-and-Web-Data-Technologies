const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("../models/user");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      callbackURL:
        "https://" +
        process.env.PROJECT_DOMAIN +
        ".glitch.me/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleID: profile.id }).then((currentUser) => {
        if (currentUser) {
          console.log("user exists");
          done(null, currentUser)
        } else {
          new User({
            username: profile.displayName,
            googleID: profile.id,
            email: profile.emails[0].value,
            admin: false
          })
            .save()
            .then((newUser) => {
              console.log("new user created", newUser);
            done(null, newUser)
            });
        }
      });
    }
  )
);
