// Creating arrays

var scores;
var names;

scores = [ 3, 1, 8, 2 ];
names = [ "Kandra", "Dax", "Blinky" ];

console.log(scores);
console.log(names);


var scores;
var names;
var akaScores;

scores = [ 3, 1, 8, 2 ];
names = [ "Kandra", "Dax", "Blinky" ];

scores.push(5);
names.push("Twinkle");

akaScores = scores;

console.log(scores);
console.log(names);
console.log(akaScores);

/* Further Adventures
 *
 * 1) Add an extra element to each array.
 *
 * 2) Declare a third variable, akaScores.
 *
 * 3) Assign the scores array to akaScores.
 *    akaScores = scores
 *
 * 4) Log akaScores to the console.
 *
 */