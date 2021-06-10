const getJustOne = require("./exercise48");
const result = [["T", "O", "D", "A", "Y"], "T"];

test("Check if function getJustOne is define", () => {
  expect(getJustOne).toBeDefined();
});

test("Check the function getJustOne", () => {
  expect(getJustOne("sentence sentence TODAY")).toEqual(result);
});
