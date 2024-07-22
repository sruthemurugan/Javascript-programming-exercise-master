// A function to display player information

var player1;
var player2;
var player;
var showPlayerInfo;
var showPlayerLocation;
var showPlayerHealth;

player1 = {
    name: "Kandra",
    place: "The Dungeon of Dome",
    health: 50
};

player2 = {
    name: "Devin",
    place: "The Dungeon of Dome ",
    health: 20
};

showPlayerLocation = function () {
    console.log(player.name + " is in " + player.place);
};
showPlayerHealth = function () {
    console.log(player.name + " has health " + player.health);
}

showPlayerInfo = function () {
    console.log(player.name);
    console.log("------------------------------");
    console.log(player.name + " is in " + player.place);
    console.log(player.name + " has health " + player.health);
    console.log("------------------------------");
    console.log("");
};

player = player1;
showPlayerInfo();

player = player2;
showPlayerInfo();



/* Further Adventures
 *
 * 1) Write a function that just shows
 *    where the player is.
 *
 * 2) Write a function that just shows
 *    the player's health.
 *
 * 3) Change the showPlayerInfo function
 *    to use your two functions.
 *
 */