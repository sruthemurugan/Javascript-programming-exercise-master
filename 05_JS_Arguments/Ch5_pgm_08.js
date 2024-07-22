// Displaying a player's name via an object property

var player1;
var player2;
var showPlayerName;


player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Devin",
    place: "The old library",
    health: 40
};

showPlayerName = function (playerName) {
    console.log(playerName.toUpperCase());
}

showPlayerName(player1.name); 
showPlayerName(player2.name);


showPlayerName = function (playerName) {
    console.log(playerName.toLowerCase());
}

showPlayerName(player1.name);
showPlayerName(player2.name);





/* Further Adventures
 *
 * 1) In the showPlayerName function,
 *    change playerName to playerName.toUpperCase().
 *    Run the function.
 *
 * 2) Change the function to show the player's
 *    name in lower case.
 *
 */