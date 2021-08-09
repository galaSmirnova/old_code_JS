function getOwnDivisiors(num) {
	let arr = [];
	for (let i = 1; i < num; i++) {
		if (num % i == 0) {
			arr.push(i);
		}
	}
	return arr;
}

function getSum(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += elem;
	}
	return sum;
}
function isPerfect(start, end) {
	let sum1; 	
	let arr = [];
	while (start <= end) {
		sum1 = getSum(getOwnDivisiors(start));
		if (sum1 == start) {
			arr.push(start);
		}
		start++;
	}
	return arr;
}
console.log(isPerfect(1, 10000000));