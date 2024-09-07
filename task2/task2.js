const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

async function newGame(req, res) {
    let gameId = Math.floor(Math.random() * 9999);
    let token = Math.floor(Math.random() * 9999999999999999);
    res.send('Your game ID is ' + gameId +  ' and your token is ' + token);
}

async function newMove(req, res) {
    //let gameId = parseInt(req.params.id);
    //let playerId = parseInt(req.params.playerid);
    /*
        example json:
        {
            "x": 4,
            "y": 1
        }
    */
    let json = req.body;
    let xPos = json.x;
    let yPos = json.y;
    let validStatus = "not valid";
    let activePlayer = false; // this checks if its the players turn to make the move.
    if (activePlayer) {
        if ((xPos >= 0 && xPos <= 10) && (yPos >= 0 && yPos <= 10)) {
            validStatus = "valid";
        }
        res.send(validStatus);
    } else {
        res.send("Its not your turn yet");
    }
}
async function checkGame(req, res) {
    //let gameId = parseInt(req.params.id);
    //let playerId = parseInt(req.params.playerid);
    /*
        example json:
        {
            "x": 4,
            "y": 1
        }
    */
    let json = req.body;
    let gameId = json.id;
    let Id = 1;
    let playerId = json.playerid;
    //let token = json.tokenid;
    let hits = ["A1", "B2", "C3"];
    let misses = ["D4", "E5", "F6"];
    let finished = true;
    let winner = null;
    if (gameId = Id) {
        if (winner == "" || winner == null) {
            finished = false;
            winner = "N/A";
        }
        try {
            res.status(200).json({"Player": playerId, "Hits": hits, "Misses": misses, "Finished": finished, "Winner": winner});
        } catch (error) {
        res.status(500).json({ message: error.message });
        }
    } else {
        res.send("Game doesn't exist.");
    }
}
app.use(bodyParser.json());
app.get('/game/new', newGame);
app.post('/game/:id/:playerid/move', newMove);
app.get('/game/:id/:playerid', checkGame);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});