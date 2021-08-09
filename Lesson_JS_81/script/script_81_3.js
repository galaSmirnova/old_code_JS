function isDoubling(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i+1]) {            
            return true;
        }
    }
    return false;
}
let arr1 = [1, 3, 5, 6, 6];
console.log(isDoubling(arr1));


