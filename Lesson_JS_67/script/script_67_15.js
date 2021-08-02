// var 1
let arr = [];
let k = 1;
for (let i = 0; i < 4; i++) {
	arr[i] = [];
	for (let j = 0; j < 2; j++) {
		arr[i].push(k);
		k++;
	}
}
console.log(arr);

//var 2
// let arr = [];
// for (let i = 0, k = 1; i <4; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 2; j++, k++) {
// 		arr[i].push(k);
// 	}
// }
// console.log(arr);