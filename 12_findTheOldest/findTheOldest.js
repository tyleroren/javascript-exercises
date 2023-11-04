const findTheOldest = function(arr) {
    const oldest = arr.sort((a, b) => {
        const currentYear = (new Date()).getFullYear();
        let last = 0;
        let next = 0;
        if ("yearOfDeath" in a) {
            last = a.yearOfDeath - a.yearOfBirth;
        } else {
            last = currentYear - a.yearOfBirth;
        }
        if ("yearOfDeath" in b) {
            next = b.yearOfDeath - b.yearOfBirth;
        } else {
            next = currentYear - b.yearOfBirth;
        }
        return last > next ? -1 : 1;
    });
    return oldest[0];
};


// Do not edit below this line
module.exports = findTheOldest;
