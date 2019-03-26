const { dictionary } = require("./dictionary");
const { Chessboard } = require("./Chessboard.js");
const readline = require("readline");
const fs = require("fs");

const chessboard = new Chessboard();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const answer = function (question) {
    return new Promise(resolve => {
        rl.question(question, resolve);
    });
}

const askPlayer = async function () {
    let inputUser = {
        position1: "",
        position2: ""
    };
    const filename = "chessMoves.json";

    const firstPosition = await answer("Enter your first position\n");
    const secondPosition = await answer("Enter your second position\n");
    rl.close();

    inputUser.position1 = firstPosition;
    inputUser.position2 = secondPosition;

    fs.appendFile(filename, JSON.stringify(inputUser) + "\n", "utf8", function (error) {
        console.log("the file has been written!");
    });
    return inputUser;
}

const readChessFile = function () {//should run only when requested
    fs.readFile("chessMoves.json", "utf8", (error, text) => {
        if (error) throw error;
        console.log(text);
    });
}


const moveFigure = async function () {
    let move = await askPlayer();

    const original = move.position1;
    const indexFirst = translateLetter(original);
    const rowFirst = translateNumber(original);

    const moved = move.position2;
    const indexSecond = translateLetter(moved);
    const rowSecond = translateNumber(moved);

    const figure = chessboard.getBoard()[rowFirst][indexFirst];
    chessboard.getBoard()[rowFirst][indexFirst] = " ";
    chessboard.getBoard()[rowSecond][indexSecond] = figure;
    chessboard.print();
}

const translateLetter = function (string) {
    const elements = string.split("");
    const letter = elements[0];
    const translatedLetter = dictionary.column[letter];
    return translatedLetter;
}

const translateNumber = function (string) {
    const elements = string.split("");
    const number = elements[1];
    const translatedNumber = dictionary.row[number];
    return translatedNumber;
}


chessboard.print();
moveFigure();

/*
## User Story 2: Moving Figures

The user should be able to move a figure to a different position via the command line.

Use the official chess notation like `e4 e5`. This moves the current figure on position `e4` to position `e5`.

Don't forget the unit tests.
*/