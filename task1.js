const readlinePromises = require('node:readline/promises');
const { stdin, stdout } = require('node:process');

const rl = readlinePromises.createInterface({
    input: stdin,
    output: stdout
  });

function north(currentroom, command) {
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

function south(currentroom, command) {
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
function west(currentroom, command) {
    console.log(currentroom);
    console.log("\n");
    console.log("----S----");
    console.log("|       |");
    console.log("|       |");
    console.log("W       |");
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
    console.log("|       |");
    console.log("|       |");
    console.log("|       |");
    console.log("---------");
    console.log("\n");
    let command = await rl.question('What is your move? ');
    let previousmove = "";
    let currentroom = "START";
    let on = 1;
while (on = 1) {
    if (command == "QUIT") {
        on = 0;
        quit();
    } else if (command == "NORTH") {
        if (previousmove == "" || previousmove == "SOUTH") {
            currentroom = "START";
            north(currentroom, command);
            previousmove = command;
        } else {
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
            console.log("No Path This Way");
        }
    } else if (command == "SOUTH") {
        if (previousmove == "NORTH") {
            currentroom = "FOYER";
            south(currentroom, command);
            previousmove = command;
        } else {
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
            console.log("No Path This Way");
        }
    } else if (command == "WEST") {
        if (previousmove == "SOUTH") {
            currentroom = "START";
            west(currentroom, command);
            previousmove = command;
            currentroom = "ELEVATOR";
        } else {
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
            console.log("No Path This Way");
        }
    } else if (command == "EAST") {
        east(currentroom, command);
        console.log("No Path This Way");
    } else {
        console.log("What??");
    } 
    command = await rl.question('What is your move? ');
}
}

  start();