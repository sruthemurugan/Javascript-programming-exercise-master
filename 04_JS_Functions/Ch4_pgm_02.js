// Displaying information from similar objects

var movie1;
var movie2;
var movie3;
var movie4;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J.Abrams"
};

movie4 = {
  title: "The Incredibles",
  actors: "Craig T. Nelson, Holly Hunter",
  directors: "Brad Bird"
}

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");
console.log("");

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");
console.log("");

console.log("Movie information for " + movie3.title);
console.log("------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("------------------------------");
console.log("");

console.log("Movie information for " + movie4.title);
console.log("------------------------------");
console.log("Actors: " + movie4.actors);
console.log("Directors: " + movie4.directors);
console.log("------------------------------");
console.log("");

var event1 = {
  title : "Meeting",
  date : "15-7-2024",
  timing : "10.00 AM",
};

var event2 = {
  title : "Birthday",
  date : "20-7-2024",
  timing : "6.00 PM",
};

var event3 = {
  title : "Family gathering",
  date : "15-8-2024",
  timing : "1.00 PM",
};

console.log("Event1 information");
console.log("------------------------------");
console.log("Title : " + event1.title);
console.log("Date : " + event1.date);
console.log("Timing : " + event1.timing); 
console.log("------------------------------");
console.log("");

console.log("Event2 information");
console.log("------------------------------");
console.log("Title : " + event2.title);
console.log("Date : " + event2.date);
console.log("Timing : " + event2.timing); 
console.log("------------------------------");
console.log("");

console.log("Event3 information");
console.log("------------------------------");
console.log("Title : " + event3.title);
console.log("Date : " + event3.date);
console.log("Timing : " + event3.timing); 
console.log("------------------------------");
console.log("");



/* Further Adventures
 *
 * 1) Add a fourth movie and display its info
 *
 * 2) All the movie info is in one big block on the console.
 *    Change the code to space out the different movies.
 *
 * 3) Create objects to represent three calendar events
 *
 * 4) Display info from the three events on the console.
 *
 */