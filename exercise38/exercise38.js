const square = (number) => {
    return number * number;
}

const showSquare = (number) => {
    let arrayNumbers = [];
    for (let i = 0; i <= number; i++) {
        arrayNumbers.push(square(i));
    }
    return arrayNumbers;
}

module.exports = {showSquare, square};