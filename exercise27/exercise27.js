const getDays = (days) => {
    let years = Math.floor(days/365);
    let remainingDays = (days%365);
    let months = Math.floor(remainingDays/30);
    remainingDays = (remainingDays%30);
    let result = `Equivale a ${years} años, ${months} meses y ${remainingDays} dias.`
    return result;
}

module.exports = getDays;