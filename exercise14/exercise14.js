const repeatString = (string,number) => {
    let result = "";
    for (let i = 0; i < number; i++) {
        result += string;        
    }
    return result;
}

module.exports = repeatString;