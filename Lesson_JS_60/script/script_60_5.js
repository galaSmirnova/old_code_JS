let arr = [25, 12, 69, 3, 45, 7, 9, 50];
let sum = 0;
for (let i = 1; i < arr.length-1; i++ ) {
    sum = arr[i-1] + arr[i] + arr[i+1];
    console.log(sum);
}