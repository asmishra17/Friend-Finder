var friends = require("../data/friends.js");
var friendsArr = friends.friends; 

module.exports = function (app) {
    // this is a GET route that responds to localhost:3000/api/friends
    app.get("/api/friends", function (request, response) {
        response.json(friendsArr);
    });

    app.post("/api/friends", function (request, response){
        friendsArr.push(request.body);
        //response.json(true);
    });
};