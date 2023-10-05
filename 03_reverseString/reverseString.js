const reverseString = function(text) {
    let letters = text.split("");
    let reverse = [];
    for (let i = 0; i < text.length; i++) {
        reverse[i] = letters[(text.length - 1 - i)];
    }
    return reverse.join("");
};

// Do not edit below this line
module.exports = reverseString;
