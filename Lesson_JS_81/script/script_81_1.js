function isPositive(arr) {
    for (let elem of arr) {
        if (elem < 0) {
            return false
        }
    }
    return true;
}
console.log( isPositive([1, -2, 3, 4, -5]) );
console.log( isPositive([1, 2, 3, 4, 5]) );