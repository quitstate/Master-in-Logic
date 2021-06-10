const exercise47 = require("./exercise47");
const result = { IT: 3, Films: 4, Videogames: 3, Soccer: 1, Surf: 2 };

test("Check if function getHobbies is define", () => {
  expect(exercise47.getHobbies).toBeDefined();
});

test("Check the function getHobbies", () => {
  expect(exercise47.getHobbies(exercise47.users)).toEqual(result);
});
