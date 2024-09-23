class Room {
    constructor(name) {
        this.name = name;
        this.north = null;
        this.east = null;
        this.south = null;
        this.west = null;
    }
}

const fs = require('fs');
let firstline = '';
let count = 0;
let linklines = [];
const allFileContents = fs.readFileSync('hotel.dg', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {
    if (count == 0) {
        firstline = line;
    } else {
        linklines.push(line);
    }
    count = count + 1;
});

let rooms = []
let roomnames = firstline.split(' ');

for (let i = 0; i < roomnames.length; i++) {
    rooms.push(new Room(roomnames[i]));
}

function findRoom(name, rooms) {
    for(let i = 0; i < rooms.length; i++) {
        if(rooms[i].name == name) {
            return rooms[i];
        }
    }
    return null;
}

function assignOnDirection(from, to, direction) {
    if(direction == "NORTH") {
        from.north = to;
    } else if(direction == "WEST") {
        from.west = to;
    } else if(direction == "SOUTH") {
        from.south = to;
    } else {
        from.east = to;
    }
} 

for (let i = 0; i < linklines.length; i++) {
    let linkSpl = linklines[i].split('>');
    let linkFrom = linkSpl[0].trim();
    let linkDir = linkSpl[1].trim();
    let linkTo = linkSpl[2].trim();
    let fromRoom = findRoom(linkFrom, rooms);
    let toRoom = findRoom(linkTo, rooms);
    assignOnDirection(fromRoom, toRoom, linkDir);
}


console.log(linklines);

const readlinePromises = require('node:readline/promises');
const { stdin, stdout } = require('node:process');

const rl = readlinePromises.createInterface({
    input: stdin,
    output: stdout
  });

function north(currentroom, command) {
    console.log(currentroom);
    console.log("\n");
    console.log("---------");
    console.log("|       |");
    console.log("|       |");
    console.log("|       |");
    console.log("|       |");
    console.log("|       |");
    console.log("----S----");
    console.log("\n");
    console.log(command);
}

function south(currentroom, command) {
    console.log(currentroom);
    console.log("\n");
    console.log("----N----");
    console.log("|       |");
    console.log("|       |");
    console.log("W       |");
    console.log("|       |");
    console.log("|       |");
    console.log("---------");
    console.log("\n");
    console.log(command);
}
function west(currentroom, command) {
    console.log(currentroom);
    console.log("\n");
    console.log("---------");
    console.log("|       |");
    console.log("|       |");
    console.log("|       |");
    console.log("|       |");
    console.log("|       |");
    console.log("---------");
    console.log("\n");
    console.log(command);
}

function east(currentroom, command) {
    console.log(currentroom);
    console.log("\n");
    console.log("---------");
    console.log("|       |");
    console.log("|       |");
    console.log("|       |");
    console.log("|       |");
    console.log("|       |");
    console.log("---------");
    console.log("\n");
    console.log(command);
}

function quit () {
    previousmove = "";
    process.exit(1);
}

async function start() {
    console.log("NORTH");
    console.log("\n");
    console.log("START");
    console.log("\n");
    console.log("----N----");
    console.log("|       |");
    console.log("|       |");
    console.log("W       |");
    console.log("|       |");
    console.log("|       |");
    console.log("---------");
    console.log("\n");
    let command = await rl.question('What is your move? ');
    let previousmove = "";
    let currentroom = "START";
    let on = 1;
    let currentSpot = rooms[0];
while (on = 1) {
    if (command == "QUIT") {
        on = 0;
        quit();
    } else if (command == "NORTH") {
        if (currentSpot.north !== null) {
            currentSpot = currentSpot.north;
            north(currentSpot.name, command);
            previousmove = command;
        } else {
            console.log("No Path This Way");
        }
    } else if (command == "SOUTH") {
        if (currentSpot.south !== null) {
            currentSpot = currentSpot.south;
            south(currentSpot.name, command);
            previousmove = command;
        } else {
            console.log("No Path This Way");
        }
    } else if (command == "WEST") {
        if (currentSpot.west !== null) {
            currentSpot = currentSpot.west;
            west(currentSpot.name, command);
            previousmove = command;
        } else {
            console.log("No Path This Way");
        }
    } else if (command == "EAST") {
        if (currentSpot.east !== null) {
            currentSpot = currentSpot.east;
            east(currentSpot.name, command);
            previousmove = command;
        } else {
            console.log("No Path This Way");
        }
    } else {
        console.log("What??");
    } 
    command = await rl.question('What is your move? ');
}
}

  start();


/*
console.log(rooms);
console.log(firstline);
console.log(linklines);
let currentSpot = rooms[0];
console.log(currentSpot);
currentSpot = currentSpot.north;
console.log("Move North");
console.log(currentSpot);
currentSpot = currentSpot.south;
console.log("Move SOUTH");
console.log(currentSpot);
currentSpot = currentSpot.west;
console.log("Move WEST");
console.log(currentSpot);
currentSpot = currentSpot.east;
console.log("Move EAST");
console.log(currentSpot); */