// Calling the showMovieInfo function

var movie1;
var showMovieInfo;
var movie;
var movie2;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
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

movie = movie1;
movie = movie2;

showMovieInfo();



/* Further Adventures
 *
 * 1) Without declaring a movie2 variable,
 *    assign movie2 to the movie variable
 *    instead of movie1.
 *    i.e. movie = movie2;
 *    What happens when you call showMovieInfo?
 *         Reference error since movie2 is not defined
 *
 * 2) Create an empty object and
 *    assign it to a movie2 variable.
 *    What happens when you call showMovieInfo now?
 *         Type error
 *
 * 3) Fill out movie2 with the properties
 *    needed by showMovieInfo.
 *    What happens when you call showMovieInfo now?
 *         The contents gets displayed
 */