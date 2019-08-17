var friends = require("../data/friends.js");

module.exports = function(app){
    app.get("/app/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req,res){
        var diff = 0;
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;
        
        var b = userScores.map(function(item){
            return parseInt(item, 10);
        });
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };

        console.log("Name: " + userName);
        console.log("User score " + userScores);

        var sum = b.reduce((a,b) => a + b, 0);
        console.log("Sum of users score " + sum);
        console.log("Best match friend diff " + bestMatch.friendDifference);

        for(var i = 0; i < friends.length; i++){
            console.log(friends[i].name);
            diff = 0;
            console.log("Total Diff " + diff);
            console.log("Best match friend diff " + bestMatch.diff);

            var bfriendScore = friends[i].scores.reduce((a,b) => a + b, 0);
            console.log("Total friend score " + bfriendScore);
            diff += Math.abs(sum - bfriendScore);

            if(diff <= bestMatch.friendDifference) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = diff;
            }
            console.log(diff + " Total Difference");
        }

        console.log(bestMatch);
        friends.push(userData);
        console.log("New user added");
        res.json(bestMatch);
    });
};