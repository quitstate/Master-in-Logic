const theMostFinded = require("./exercise37");
const result = {
  "The Most Frequent": "hello",
  "Value Of The Most Frequent": 2,
};

test("Check if function theMostFinded is define", () => {
  expect(theMostFinded).toBeDefined();
});

test("Check the function theMostFinded ", () => {
  expect(theMostFinded("hello bye hello")).toEqual(result);
});
