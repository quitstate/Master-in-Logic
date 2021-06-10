const showStudents = require("./exercise45");

test("Check if function showStudents is define", () => {});

test("Check the function showStudents", () => {
  expect(
    showStudents([
      ["Victor", 10],
      ["Juan", 5],
      ["Pepe", 4],
      ["Maria", 8],
      ["Marta", 3],
    ])
  ).toEqual({ approved: 3, suspended: 2 });
});
