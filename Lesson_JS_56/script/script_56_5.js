let arr = [-1, 2, -5, 3, -6, 9];
let arr2 = [];
for (let elem of arr) {
    if (elem > 0) {
        arr2.push(elem);
    }
} 
console.log(arr2);