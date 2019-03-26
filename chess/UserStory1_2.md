# Chess Application

In this exercise you should create a chess game on your own. Only the user stories (= requirements) are provided. The implementation is completely up to you.

Create a folder `chess` in your branch and implement the application there.

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

Hint: You find a possible way in PersonAsker.spec.js

## User Story 2: Moving Figures

The user should be able to move a figure to a different position via the command line.

Use the official chess notation like `e4 e5`. This moves the current figure on position `e4` to position `e5`.

Don't forget the unit tests.
