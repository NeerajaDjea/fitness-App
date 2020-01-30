// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

/* As a quick mention for this whole file, it is probably better to keep all of the 
public html files that you are going to serve in a seperate folder to the public one 
(on the same level as public) and call it something like "views". Otherwise the html
files will get served as static files with the css and js, as well as being sent via the
html routes in this file. */

/* also another aside which Tom mentioned ages ago. If you aren't using a parameter of a 
callback function (like req in many of the routes below) you can prefix it with an underscore
like _req to indicate that it is not being used. (vscode likes this and changes it's colour :) */

module.exports = function(app) {
  app.get("/", function(_req, res) {/* underscore added here to req as example */
    // Sends user to the splash page
    res.sendFile(path.join(__dirname, "../public/splash.html"));
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/calculator", function(req, res) {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/calculator");
    // }
    res.sendFile(path.join(__dirname, "../public/cal-calc.html"));
  });

  app.get("/editprofile", function(req, res) {
    // Sends user to the edit profile page  
    res.sendFile(path.join(__dirname, "../public/edit-profile.html"));
  });

  app.get("/recipe", function(req, res) {
    // Sends user to the recipe ideas page  
    res.sendFile(path.join(__dirname, "../public/recipe.html"));
  });

  app.get("/schedule", function(req, res) {
    // Sends user to the calendar page
    res.sendFile(path.join(__dirname, "../public/calendar.html"));
  });

  app.get("/workout", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/workout.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
};
