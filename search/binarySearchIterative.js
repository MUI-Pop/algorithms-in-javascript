////////////////////////////////////////////////////
// Binary Search Iterative
////////////////////////////////////////////////////
let arr = [1, 2, 3, 4, 5, 6, 10];


function search(arr, key) {

	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let mid = Math.floor((right + left) / 2);

		if (arr[mid] === key) {
			return key;
		}

		if (arr[mid] > key) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

}

console.log(search(arr, 10));