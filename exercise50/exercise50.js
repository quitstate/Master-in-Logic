const loops = (number) => {
    let arrNumbers = number.toString().split('');
    let loops = 0;
    for (number of arrNumbers) {
        number = parseInt(number);
        if(number === 0 || number === 6 || number === 9){
            loops++;
        } else if (number === 8) {
            loops += 2;
        }
    }
    return loops;
}

module.exports = loops;