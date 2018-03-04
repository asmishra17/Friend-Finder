module.exports = function (app) {
    // this is a GET route that responds to localhost:3000/api/friends
    app.get("/api/friends", function (request, response) {
        response.send();
    })
}