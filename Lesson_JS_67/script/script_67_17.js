// var 1
let arr = [];
let a = 1;
for (let i = 0; i < 2; i++) {
	arr[i] = [];
	for (let j = 0; j < 2; j++) {
		arr[i][j] = [];
		for (let k = 0; k <2; k++) {
			arr[i][j].push(a);
			a++
		}		
	}
}
console.log(arr);

//var 2
// let arr = [];
// for (let i = 0, a=1; i < 2; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 2; j++) {
// 		arr[i][j] = [];
// 		for (let k = 0; k <2; k++, a++) {
// 			arr[i][j].push(a)
// 		}		
// 	}	
// }
// console.log(arr);
