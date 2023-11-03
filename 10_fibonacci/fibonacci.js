const fibonacci = function(seq) {
    let current = 1;
    let last = 0;
    let next = 1;
    if (seq < 0) return "OOPS";
    for (let i = 0; i !== Number(seq); i++) {
        // console.log(`last: ${last}, current: ${current}, next: ${next}`)
        next = last + current;
        last = current;
        current = next;
    }
    return last;
};

// Do not edit below this line
module.exports = fibonacci;
