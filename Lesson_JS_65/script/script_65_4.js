let arr = [
	[1, 2, 3, [4, 5, [6, 7]
		]
	], 
	[8, [9, 10]
	]
];
let sum = arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] + 
	arr[0][3][1] + arr[0][3][2][0] + arr[0][3][2][1] +
	arr[1][0] + arr[1][1][0] + arr[1][1][1];
	console.log(sum);