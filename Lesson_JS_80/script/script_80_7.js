function getArray(num1, num2) {
	let arr = [];
	let i = 0;
	while (num1 <= num2) {
		arr.push(num1);
		num1++;	
		i++;
	}	
	return arr;
}
console.log(getArray(20,35));