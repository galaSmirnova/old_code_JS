function isLucky(num) {
	let str = normalizeNum(num);
	let sum1 = 0;
	let sum2 = 0;
	for (let i = 0; i < str.length / 2; i++) {
		sum1 = sum1 + Number(str[i]);
	}
	for (let j = str.length-1; j >= str.length / 2; j--) {
		sum2 = sum2 + Number(str[j]);
	}
	return sum1 == sum2;
}
function normalizeNum(num, digitsAmount) {
	let str = String(num);
	return formStr('0', digitsAmount - str.length) + str; 
}
function formStr(data, length) {
	let str = '';
	for (let i = 1; i <= length; i++) {
		str = str + data;
	}
	return str;
} 
function getLast(num) {
	
	let last = '';
	for (let i = 1; i <= num; i++) {
		last += '9';
	}
	return Number(last);
}
// function getFirst(num) {
// 	if (num == 4) {
// 		return 101;
// 	}
// 	if (num== 6) {
// 		return 1001;
// 	}
// 	if (num == 8) {
// 		return 10001;
// 	}
// 	if (num == 10) {
// 		return 100001;
// 	}
// }

function getFirst(num){
	let result = [];
	result.push(1);
	for (let i = 1; i <= num/2-1; i++) {
		result.push(0);
	}
	result.push(1);
	result = Number(result.join(''));
	return result;
}

function getLuckyTickets(digitsAmount) {
	let result = [];
	let first = getFirst(digitsAmount);
	let last = getLast(digitsAmount);
	
	for (let i = first; i <= last; i++) {
		let ticket = normalizeNum(i, digitsAmount);
		if (isLucky(ticket)) {
			result.push(ticket);
		}
	}
	return result;
}
console.log(getLuckyTickets(4));