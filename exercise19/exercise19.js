const allFilms = [
  {
    title: "The lord of the ring",
    director: "Peter Jackson",
    view: true,
  },
  {
    title: "The ligue of justice",
    director: "Zack Snyder",
    view: false,
  },
  {
    title: "The Avengers: Endgame",
    director: "Joe Russo",
    view: true,
  },
  {
    title: "Batman vs Superman",
    director: "Zack Snyder",
    view: false,
  },
];

const showFilms = (films) => {
  let result = "";
  for (const film of films) {
    if (film.view === true) {
      result += `You are already seen this film: ${film.title}` + "\n";
    } else {
      result += `You haven't seen this movie: ${film.title}` + "\n";
    }
  }
  return result;
};

module.exports = { allFilms, showFilms };
