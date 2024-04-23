// This is a class that contains all the properties of a movie.
// The properties include title of the movie, studio name of the production and rating of the movie with default as PG
class Movie {
  // constructor that is used to initialize the properties of the movie.
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  //   This is a static method that is used to filter out all the movies with a PG rating.
  static getPG(movies) {
    let PGMovies = [];
    for (const movie of movies) {
      if (movie.rating === "PG") {
        PGMovies.push(movie);
      }
    }
    return PGMovies;
  }
}

// Creating an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
let movie = new Movie("Casino Royale", "Eon Productions", "PG13");
console.log(movie);

let movie1 = new Movie("Casino Royale", "Eon Productions", "PG13");
let movie2 = new Movie("Deadpool", "21st Century Fox", "R");
let movie3 = new Movie("The Dark Knight", "Warner Bros.", "U/A");
let movie4 = new Movie("Inception", "Nolan Productions", "PG-13");
let movie5 = new Movie("Batman Begins", "Warner Bros.", "PG");
let movie6 = new Movie("Iron Man", "Marvel", "PG");
let movie7 = new Movie("The Avengers", "MAK studio", "PG-13");

let movies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];

// Getting the movies with a PG rating
const getPGMovies = Movie.getPG(movies);

// Consoling the output
console.log(getPGMovies);
