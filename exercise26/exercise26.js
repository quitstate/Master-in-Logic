const fibonacci = (number) => {
    let serie = [0,1];
    let result = [];
    for (let i = 2; i <= number; i++) {
        serie.push(serie[i-1]+serie[i-2]);
    }
    result = [serie,serie[number]]
    return result;
}

module.exports = fibonacci;