let arr = [25, 12, 69, 3, 45, 7, 9, 50];
let sum = 0;
for (let i = 2; i < arr.length; i++ ) {
    sum = arr[i-2] + arr[i-1] + arr[i];
    console.log(sum);
}