function shuffle(arr) {
	let result = [];
	let elem, random;
	while (arr.length > 0) {
		random = getRandomInt(0, arr.length - 1);
		elem = arr.splice(random, 1)[0];
		result.push(elem);
	}
	return result;
}
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(shuffle([3,5,2,1]));