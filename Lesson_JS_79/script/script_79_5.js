function round(num) {
	return num.toFixed(3);
}
function sqrt(num) {
	return Math.sqrt(num);
}
function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
let result = round(sum(sqrt(2), sqrt(3), sqrt(4)));
console.log(result);