const sumAll = function(...num) {
    for (const n of num) {
        if (typeof n != "number") {
            return "ERROR";
        } else if (n < 0) {
            return "ERROR";
        }
    }
    total = 0
    num.sort((a, b) => a-b);
    for (let i = num[0]; i <= num[1]; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
