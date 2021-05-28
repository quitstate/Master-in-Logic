const downToZero = (number) => {
    let result = `--- The ${number} to 0 --- \n`;
    while(number > 0){
        result += `- nº${number} \n`
        number -= 8;
    }
    result += "--- END ---"
    return result;
}

module.exports = downToZero;