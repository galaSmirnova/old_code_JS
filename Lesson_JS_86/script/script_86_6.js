function getSimpleDivisors(num) {
	let arrDiv = [];
	for (let i = 1; i <= num; i++) {
		if (num % i == 0) {			
			arrDiv.push(i);
		}
	}	
	arrDiv.splice(0, 1);
	for (let i = 0; i < arrDiv.length; i++) {
	for (let j = 2; j < arrDiv[i]; j++) {
		if (arrDiv[i] % j == 0) {
			arrDiv.splice(i, 1);		
		}		
	}		
}
	return arrDiv;
}
console.log(getSimpleDivisors(127));

