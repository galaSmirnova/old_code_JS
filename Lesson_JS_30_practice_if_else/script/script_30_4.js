let num = 123;
let first =Number(String(num)[0]);
let second = Number(String(num)[1]);
let third = Number(String(num)[2]);
if (String(num).length == 3) {
	console.log(first + second + third);
} else {
	console.log('Число должно сосотоять из 3-х цифр');
}