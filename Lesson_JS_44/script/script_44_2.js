let arr = [2, 6, 2, 5, -9];
let sum = 0;
for (let elem of arr) {
    if (elem < 0) {
        break;
    } else {
        sum += elem;
    }
}
console.log(sum);