function getGreatestCommonDivisor(num1, num2) {
	let div1 = getDivisors(num1);
	let div2 = getDivisors(num2);
	let result = [];
	let great;

	for (let elem of div1) {
		if (inArray(elem, div2)) {
			result.push(elem);
		}
	}
	great = result.reverse()[0];
	if (great == 1) {
		return true;
	}
	return false;
}
function inArray(elem, arr) {
	return arr.indexOf(elem) !== -1;
}

function getDivisors(num) {
	let arr = [];
	for (let i = 1; i <= num; i++) {
		if (num % i == 0) {
			arr.push(i);
		}
	}
	return arr;
}
console.log(getGreatestCommonDivisor(152,19));