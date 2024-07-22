// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

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

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

var question1 = {
    text: "Which of the three banks will be merged with the other two to create India's third-largest bank?",
    options: ["Punjab National Bank", "Indian Bank" , "Bank of Baroda" ,   "Dena Bank"],
    answer: 1
};
var question2 = {
    text: "Where was India's first national Museum opened?",
    options: ["Delhi" ,"Hyderabad", "Rajasthan" , "Mumbai"],
    answer: 3
};
var question3 = {
    text: "The world's nation 5G mobile network was launched by which country?",
    options: ["Japan" , "Asia" , "South Korea" , "Malaysia"],
    answer: 2
};
var showques = function () {
    console.log(question.text);
    console.log("Options:");
    for (var i = 0; i < question.options.length; i++) {
        console.log((i + 1) + ". " + question.options[i]);
    }
    console.log("Answer: " + (question.answer + 1));
    console.log("------------------------------");
};
question = question1;
showques();
question = question2;
showques();
question = question3;
showques();


/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */