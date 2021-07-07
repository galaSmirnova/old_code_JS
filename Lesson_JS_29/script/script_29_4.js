let num = 57;
let last = String(num)[String(num).length - 1];
if (last == 0 || last == 2 || last == 4 || last == 6 || last == 8) {
	console.log('Число четное');
} else {
	console.log('Число НЕ четное');
}