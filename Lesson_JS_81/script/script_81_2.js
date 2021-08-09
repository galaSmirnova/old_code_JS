function isOdd(num) {    
    let str = num.toString();
    let arr = str.split('');
    // console.log(arr);
    for (let elem of arr) {
        if (elem % 2 == 0) {
            return false;
        }
    }
    return true;
}
console.log(isOdd(26548)); 

