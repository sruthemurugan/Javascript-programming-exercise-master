// Using a function to display object properties

var showMovieInfo;
var movie = {
  title: "The Incredibles",
  actors: "Holly Hunter , Craig T. Nelson",
  directors: "Brad Bird"
};


showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};

showMovieInfo();


/* Further Adventures
 *
 * 1) Add a call to showMovieInfo and run the program.
 *    What happens? 
 *       Reference Error : Since movie id not defined
 *
 * 2) Declare a movie variable
 *    but don't assign it a value.
 *    Run the program. What happens now? 
 *       Type Error
 *
 * 3) Create an empty object and
 *    assign it to the movie variable.
 *    Run the program again.
 *    Does the output change? 
 *       Yes the contents in the function is displayed
 *
 * 4) Add title, actors and directors properties
 *    to the movie object. Run one more time.
 *    Is the output as expected?
 *       Yes
 *
 */