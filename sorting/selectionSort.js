

////////////////////////////////////////////////////
// Selection Sort
////////////////////////////////////////////////////

let arr = [10, 3, 5, 1, 2];


function sort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let minIdx = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIdx]) {
				minIdx = j;
			}
		}

		let temp = arr[i];
		arr[i] = arr[minIdx];
		arr[minIdx] = temp;
	}
}

sort(arr);
console.log(arr);