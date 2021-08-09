function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
let arr = [2, 3, 6, 8, 4];
function getRandomElem(arr) {
	return arr[getRandomInt(0, arr.length - 1)];
}
console.log(getRandomElem(arr));