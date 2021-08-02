function delElem(num, arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == num) {
			arr.splice(i, 1);
			i--;	
		}
	}
	return arr;
}
let arr1 = [2, 5, 3, 2, 6, 2, 2, 6];
let arr2 = [3, 5, 12, 65, 5, 85, 5, 5, 2]
console.log(delElem(2, arr1));
console.log(delElem(5, arr2));