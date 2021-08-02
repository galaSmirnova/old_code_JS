function division(num) {
	let i = 1;
	while (true) {
		num /= 2;
		if (num < 10) {
			return i;
		}
		i++;
	}
}
console.log(division(200));

