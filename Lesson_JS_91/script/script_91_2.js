function range(min, max) {
	let result = [];
	for (let i = min; i <= max; i++) {
		result.push(getRandomInt(min, max));		
	}
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	return result;
}
console.log(range(1, 5));