function isFriendly(start, end) {

		let arr = [];
		let sum1, sum2;
		for (let i = start; i <= end; i++) {
			sum1 = getSum(getOwnDivisors(i));
			for (let j = i +1; j <= end; j++) {
				sum2 = getSum(getOwnDivisors(j));
				if (sum1 == j && sum2 == i) {
					arr.push([sum1, sum2]);
				}
			}
	}
	return arr;	
}
//находим дклители числа
function getOwnDivisors(num) {
	let divisors = [];
	for ( let i = 1; i < num; i++) {
		if (num % i == 0) {
			divisors.push(i);
		}
	}	
	return divisors;
}

//находим сумму числителей
function getSum(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += elem;
	}
	return sum;
}
console.log(isFriendly(1, 9000));