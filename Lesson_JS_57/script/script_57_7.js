let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let result = {};
for (let key in obj) {
    result[obj[key]] = key;
}
console.log(result);