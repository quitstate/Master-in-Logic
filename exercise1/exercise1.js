/*
    Exercise 1: given a number, return its complete multiplication table
*/

const multiplicationTable = (number) => {
    const arrayResults = [];
    arrayResults.push(`# Table from ${number}#`);
    for (let counter = 1; counter < 11; counter++) {
        const result = counter * number;
        arrayResults.push(`${counter} x ${number} = ${result}`);
    }
    return arrayResults;
}

multiplicationTable(5);

module.exports = multiplicationTable;