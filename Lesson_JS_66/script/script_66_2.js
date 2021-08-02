let arr = [
    [
        [1, 2], [3, 4]
    ], 
    [
        [5, 6], [7, 8]
    ]
];
let sum = 0;
for (let subSubArr of arr) {
    for (let subArr of subSubArr) {
        for (let elem of subArr) {
            sum += elem;
            console.log('сумма елем подподмасива ' + sum);
        }
        console.log('сумма елем подмасива ' + sum);
    }
    console.log('сумма елем масива ' + sum);
}
console.log(sum);