function getSum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += Number(elem);
	}
	
	return sum;
}
function getDigits(num) {
	return String(num).split('');
}
console.log(getSum(getDigits(12345)));