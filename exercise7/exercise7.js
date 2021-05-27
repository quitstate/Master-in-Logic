const impar = (number1, number2) => {
    let counter = 0;
    while (number1 < number2) {
        if(number1%2 !== 0) {
            counter++;
        }
        number1++;
    } 
    return counter;
};

module.exports = impar;