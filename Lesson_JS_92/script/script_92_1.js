function randoms(arr, length) {
	return first(shuffle(arr), length);
}
function first(arr, length) {
	return arr.slice(0, length);
}
function shuffle(arr) {
	let result = [];
	
	while (arr.length > 0) {
		let random = getRandomInt(0, arr.length - 1);
		let elem = arr.splice(random, 1)[0];
		result.push(elem);
	}
	
	return result;
}
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randoms([2,3,5,7], 3));