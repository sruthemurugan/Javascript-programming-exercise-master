// Iterating over an array with forEach

var items;
var showInfo;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];
items.push("The Great Wall of China");
items[4] = "The Taj Mahal";

showInfo = function (itemToShow) {
  console.log(itemToShow + " has " + itemToShow.length + " letters.");
};

items.forEach(showInfo);
totalLetters = function () {
  var total = 0;
  items.forEach(function (item) {
    total += item.length;
  });
  console.log("The total number of letters is " + total);
};

totalLetters();


/* Further Adventures
 *
 * 1) Add a few extra items to the array, some
 *    using push and some using square brackets.
 *    Run the program.
 *
 * Strings also have a length property
 * which gives the number of characters in the string.
 *
 * 2) Update the showInfo function to also
 *    display the number of letters in each item.
 *
 * 3) Write a new function that finds the total
 *    number of letters of the elements in
 *    the items array.
 *
 */