# Chess Application

## User Story 3: Import and Export

The application should be able to save the current status into a json file. It should also be able to load the status from a json file.

Users should be able to set

- execute the export along the name of file (optionally) and
- execute the import along the name of the file (optionally) and
- print out the current board

via the console.

This means your application must be able to read user input, aka. CLI (command line interface).

Again, find ways to test both import and export.

## User Story 5: Logic

If the user enters a new move, the application should validate if that move is actually allowed or not. In case, it is not allowed, it should show an error message and ask the user for a new input.

Include unit tests.

## User Story 6: Two Players

The application should allow that two players can play against each other and also recognise if one player has won the game, e.g. the player is `checkmate`. Please keep in mind: If a player has been set to `check`, only moves are allowed that would bring the player out of this position.
