// configure our dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlroutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

// setting up the express app
var app = express();
var PORT = process.env.PORT || 3000;

// setting up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

htmlRoutes(app);

// starting data 
var friends = [
    {
      routeName: "aditi",
      name: "Aditi",
      photo: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/367a7623208445.563236ad8f3be.jpg",
      q1: 1,
      q2: 2,
      q3: 3,
      q4: 4,
      q5: 5,
      q6: 5, 
      q7: 4,
      q8: 3, 
      q9: 2,
      q10: 1 
    }
];

// starting the server 
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});