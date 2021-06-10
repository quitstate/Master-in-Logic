# Master-in-Logic
More than 50 programming exercises solved and technical tests

## Usage

Using [npm](https://www.npmjs.com/):

    $ npm install
    $ npm run test

## Description of the exercises 

### Exercise 1

- Given a number return its complete multiplication table.
- Input: multiplicationTable(5)
- Output: arrayCheck


```js
const arrayCheck = [
  "# Table from 5#",
  "1 x 5 = 5",
  "2 x 5 = 10",
  "3 x 5 = 15",
  "4 x 5 = 20",
  "5 x 5 = 25",
  "6 x 5 = 30",
  "7 x 5 = 35",
  "8 x 5 = 40",
  "9 x 5 = 45",
  "10 x 5 = 50"
];
```

### Exercise 2

- Given a text string, check if it is a palindrome or not. Palindromes are words that read the same even when inverted. Disregard rare spaces or symbols.
- Input: palindrome("otto"), palindrome("Pedro")
- Output: true, false

### Exercise 3

- Given a word, look for it in a phrase and return how many times it appears in it
- Input: coincidences("hello how are you, I am Ronald Vezga, I repeat I am Ronald Vezga", "am")
- Output: 2

### Exercise 4

- Given a text string, turn it around and reverse the order of its characters, without using the language's own methods, only control structures
- Input: invert("hello")
- Output: "olleh"

### Exercise 5

- How much is x percent of x number
- Input: getPercentage(50, 1000)
- Output: 500

### Exercise 6

- Draw a hollow square with asterisks
- Input: drawRectangle(4)


```js
/*
- Output: 
 ****
 *  *
 *  *
 ****
*/
```

### Exercise 7

- Given two numbers, return how many odd numbers there are between them
- Input: impar(1, 100)
- Output: 50

### Exercise 8

- Given an integer, invert it and returns the integer again
- Input: reverseNumber(54), reverseNumber(-1253)
- Output: 45, -3521

### Exercise 9

- Given two arrays, return an array with only the common elements between both.


```js
/*
- Input:
*/
const array1 = [4,5,6,7];
const array2 = [7,8,9,7,5];
const array3 = ["Pablo","Pedro", "Maria", "Juana", "Marco"];
const array4 = ["Ronald","Rafael", "Pedro", "Marco", "Rosa"];
getCommonElements(array1,array2) // Output: [5,7]
getCommonElements(array3,array4) // Output: ["Pedro", "Marco"]
```

### Exercise 10

- Given a number, show a staircase of "[-]" rungs, using the number for the levels of the staircase
- Input: stair(4)


```js
/*
- Output:
[-]
[-][-]
[-][-][-]
[-][-][-][-]
*/
```

## License

[MIT License](/LICENSE)



