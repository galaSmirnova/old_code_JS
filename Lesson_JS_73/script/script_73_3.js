let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let elem of arr) {
	sum = sum + Math.pow(elem, 3);
}
let result = Math.sqrt(sum);
console.log(result);