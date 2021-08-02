function getSumSquare() {
    let sum = 0;
    for (let elem of arr) {        
        sum += elem ** 2
    }
    return sum;
}
let arr = [1, 2, 3, 4, 5];
alert(getSumSquare(arr));
