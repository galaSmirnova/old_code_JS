let arr = [12, 19, 28, 13, 14, 345];
let result = [];
function inRange(num) {
	let sum = getSum(getDigit(num));
	return sum >= 1 && sum <= 9;
}

function getSum(arr) {
	let sum = 0;
	for (elem of arr) {
		sum += Number(elem);
	}
	return sum;
}

function getDigit(num) {
	return String(num).split('');
}

for (let elem of arr) {
	if (inRange(elem)) {
		result.push(elem);
	}
}
console.log(result);