
// first variant

// function getDiff(arr1, arr2) {
// 	let result = [];
// 	for (let elem of arr1) {
// 		if (!inArray(elem, arr2)) {
// 			result.push(elem);
// 		}
// 	}
// 	for (let elem of arr2) {
// 		if (!inArray(elem, arr1)) {
// 			result.push(elem);
// 		}
// 	}
// 	return result;
// }

// function inArray(elem, arr) {
// 	return arr.indexOf(elem) !== -1;
// }

// console.log(getDiff([1,2,3], [1,5,3,4]));

//second variant

function getDiff(arr1, arr2) {
	let dif1 = getFirstDiff(arr1, arr2);
	let dif2 = getFirstDiff(arr2, arr1);
	return [].concat(dif1, dif2);	
}

console.log(getDiff([2, 5, 6, 1], [2, 8, 6, 7]));

function getFirstDiff(arr1, arr2) {
	let result = [];
	for (let elem of arr1) {
		if (!inArray(elem, arr2)) {
			result.push(elem);
		}
	}
	return result;
}

function inArray(elem, arr) {
	return arr.indexOf(elem) !== -1;
}
