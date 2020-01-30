var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email"
  },
  function(email, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
      where: {
        email: email
      }
    }).then(function(dbUser) {
      // If there's no user with the given email
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));

passport.use(new GoogleStrategy({
  clientID: "409910794983-piq511nrq73s4mfo74m94jb9sb1hsg3g.apps.googleusercontent.com",
  clientSecret: "ByoPhpTMrdy0azLez_PNpJbX", 
  /* If this secret is something that is meant to be totally "secret" 
  then it would be better to keep it stored in your .env file so that
   it isn't made public */
  callbackURL: "http://localhost:8080/api/auth/google/callback" 
  /* It is best to use relative paths here e.g. /api/auth/... rather than
  hardcode in a full url (unless it's an external one*/
},
(token, refreshToken, profile, done) => {
  return done(null, {
      profile: profile,
      token: token
  });
}));




// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
