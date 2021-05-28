const exercise19 = require("./exercise19");

const result =
  "You are already seen this film: The lord of the ring" +
  "\n" +
  "You haven't seen this movie: The ligue of justice" +
  "\n" +
  "You are already seen this film: The Avengers: Endgame" +
  "\n" +
  "You haven't seen this movie: Batman vs Superman" +
  "\n";

test("Check if function showFilms is define", () => {
    expect(exercise19.showFilms).toBeDefined();
});

test("Check the function showFilms", () => {
    expect(exercise19.showFilms(exercise19.allFilms)).toEqual(result);
});
