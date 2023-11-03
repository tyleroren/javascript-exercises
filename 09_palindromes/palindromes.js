const palindromes = function (str) {
    let arr = str.toLowerCase().replaceAll(/\W/gi, "").split('');
    return arr.join('') === arr.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
