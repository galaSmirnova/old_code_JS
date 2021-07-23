let num = 111111;
let sum1= Number(String(num)[0]) + Number(String(num)[1]) + Number(String(num)[2]);
let sum2= Number(String(num)[3]) + Number(String(num)[4]) + Number(String(num)[5]);
if (sum1 == sum2) {
	console.log('Сумма первых и вторых трех цифр равна');
} else {
	console.log('Сумма первых и вторых трех цифр не равна');
}