const getCommonElements = (array1, array2) => {
    const arrayfiltered = array1.filter(element => array2.includes(element));
    return arrayfiltered;
}

module.exports = getCommonElements;