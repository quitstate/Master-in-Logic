const getOddAndEven = (number) => {
    return {
        odd: number.filter(num => num % 2 === 0),
        even: number.filter(num => num % 2 !== 0)
    }
}

module.exports = getOddAndEven;