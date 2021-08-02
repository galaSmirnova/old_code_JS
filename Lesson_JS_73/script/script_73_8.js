let arr = [];
function getRandom (min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
for (let i = 0; i < 10; i++) {
	arr[i] = getRandom(1, 10);
}
console.log(arr); 