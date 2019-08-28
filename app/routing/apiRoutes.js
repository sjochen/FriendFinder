var friends = require("../data/friends.js");

module.exports = function(app){
    app.get("/app/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req,res){
        var diff = 0;
        var bestMatch;
        var userData = req.body;
        var userScores = userData.scores;
        var arr = [];
        var b = userScores.map(function(item){
            return parseInt(item, 10);
        });
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };
        

        for(var i = 0; i < friends.length; i++){
            diff = 0;
            for(var j = 0; j < friends[i].scores.length; j++){
              var numberOne = userScores[j];
              var numberTwo = friends[i].scores[j];
              diff += Math.abs(numberOne - numberTwo);
            }
            friends[i].difference = diff;
            arr.push(diff);
        }
        var min = Math.min(...arr);
        for(k = 0; k < friends.length; k++){
        if(friends[k].difference === min){
            bestMatch = friends[k];
        }
        }   

        console.log(bestMatch);
        friends.push(userData);
        console.log("New user added");
        res.json(bestMatch);
    });
};