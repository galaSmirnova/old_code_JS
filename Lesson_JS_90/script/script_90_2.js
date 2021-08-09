function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
let arr = [2, 5, 6, 3, 12];
// for (let i = 0; i <= 9; i++) {
// 	arr.push(getRandomInt(1, 15));
// }
console.log(arr);
function getRandomSum(arr) {
	let sum = 0;
	let i = 1;
	while (i <= 3) {
		sum = sum + arr[getRandomInt(0, arr.length - 1)];
		i++;
	}
	return sum;
}
console.log(getRandomSum(arr));