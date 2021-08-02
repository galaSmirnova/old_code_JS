// var 1
let arr =[];
let k = 2;
for (let i = 0; i < 4; i++) {
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i].push(k);
		k+=2;
	}
}
console.log(arr);

//var 2
// let arr = [];
// for (let i = 0, k = 2; i < 4; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 3; j++, k+=2) {
// 		arr[i].push(k);
// 	}
// }
// console.log(arr);
