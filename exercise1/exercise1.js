test("Check if a function palindromo is define", () => {
  expect(palindromo).toBeDefined();
});

test("Is a Palindromo", () => {
    expect(palindromo("otto")).toEqual(true);
})

test("Is not a Palindromo", () => {
    expect(palindromo("Pedro")).toEqual(false);
})