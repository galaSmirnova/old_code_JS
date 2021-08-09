function isFriendly(num1, num2) {
	let sum1 = getSum(getOwnDivisors(num1));
	let sum2 = getSum(getOwnDivisors(num2));
	return sum1 == num2 && sum2 == num1;
}

function getOwnDivisors(num) {
	let divisors = [];
	for ( let i = 1; i < num; i++) {
		if (num % i == 0) {
			divisors.push(i);
		}
	}	
	return divisors;
}

function getSum(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += elem;
	}
	return sum;
}
console.log(isFriendly(284, 220));
