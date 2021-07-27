let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
for (let i=0; i<arr.length; i++) {
    obj[arr[i]] = i+1;
}
console.log(obj);