//Keep the movie data inside of an Array (in Real World this would be saved in a database)
const movies = [
  { 
    name: "MilkShake",
    genre: "horror",
    rating: 8
  },
  { 
    name: "Avatar",
    genre: "sci-fi",
    rating: 10
  },
  { 
    name: "Pokemon",
    genre: "children, comedy, adventure",
    rating: 10
  },
  { 
    name: "The Vvitch",
    genre: "horror, mystery, drama, fantasy",
    rating: 3
  },
  { 
    name: "Titanic",
    genre: "drama",
    rating: 7
  },
  { 
    name: "Titanic II",
    genre: "fantasy",
    rating: 4
  },
  { 
    name: "MilkShake II",
    genre: "family",
    rating: 5
  },
  { 
    name: "MilkShake III",
    genre: "horror",
    rating: 3
  },
  { 
    name: "MilkShake 4",
    genre: "horror, mystery, comedy",
    rating: 10
  }
];

//Allow the Controller to access and fetch the movie list
exports.getMovies = () => {
  return movies;
};