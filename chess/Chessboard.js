class Chessboard {

    constructor() {

        this.board = {
            1: ["r", "k", "b", "Q", "K", "b", "k", "r"],
            2: ["p", "p", "p", "p", "p", "p", "p", "p"],
            3: ["", "", "", "", "", "", "", ""],
            4: ["", "", "", "", "", "", "", ""],
            5: ["", "", "", "", "", "", "", ""],
            6: ["", "", "", "", "", "", "", ""],
            7: ["p", "p", "p", "p", "p", "p", "p", "p"],
            8: ["r", "k", "b", "Q", "K", "b", "k", "r"]
        }

    }

    getBoard() {
        return this.board;
    }

    printLine(letter) {

        let line = "|";
        for (let index = 0; index < 8; index++) {
            if (this.board[letter][index].length) {
                line = line + this.board[letter][index] + "|";
            }
            else {
                line = line + " " + "|";
            }
        }
        console.log(line);

    }

    print() {
        for (let property in this.board) {
            if (this.board.hasOwnProperty(property)) {
                this.printLine(property);
            }
        }
    }
}

module.exports = { Chessboard }

/*
## User Story 1: Output

Create an application that prints out a chessboard along figures to the console. Find a way, where you can can also test the output via a unit test.

The output should look something like this:

```
---------------
|B| |K| | | | |
---------------
| | | |P| | | |
---------------
```

This shows just a small part of the chessboard with 3 figures: Bishop, King and Pawn.

*/