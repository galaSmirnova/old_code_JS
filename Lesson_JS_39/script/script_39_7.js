let arr = [-2, 5, 9, -15, 1, 4];
result = 0;
for(let i=0; i<arr.length; i++){
    if (arr[i] > 0) {
        result += arr[i];
    }    
}
console.log(result);
