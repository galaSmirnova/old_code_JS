let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
for (let i = 1; i <= arr.length; i++) {
    obj[i] = arr[i-1];
}
console.log(obj);