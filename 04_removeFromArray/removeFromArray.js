const removeFromArray = function(array, ...remove) {
    return array.filter((toDel) => !remove.includes(toDel));
};


// Do not edit below this line
module.exports = removeFromArray;