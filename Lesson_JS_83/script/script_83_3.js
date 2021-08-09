let nums = [123, 456, 789];
let result = [];
for (let elem of nums) {
    result.push(reverseNumber(elem));
}
function reverseNumber(num) {
    return String(num).split('').reverse().join('');
}
console.log(result);
