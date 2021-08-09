let arr1 = [1, 2, 3];
let arr2 = [2, 5, 6, 3];
function getInt(arr1, arr2) {
	let result = [];

	for (let elem of arr1) {
		if (inArray(elem, arr2)) {
			result.push(elem);
		}
	}
	return result;
}
function inArray(elem, arr) {
	return arr.indexOf(elem) !== -1;
}
console.log(getInt(arr1, arr2));