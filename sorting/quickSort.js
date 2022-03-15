////////////////////////////////////////////////////
// Quick Sort
////////////////////////////////////////////////////
let arr = [10, 3, 5, 2, 1, 4];

function partition(arr, start, end) {

	const pivotValue = arr[end];
	let pivotIndex = start;
	for (let i = start; i < end; i++) {
		if (arr[i] < pivotValue) {
			// Swapping elements
			[arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
			// Moving to next element
			pivotIndex++;
		}
	}

	// Putting the pivot value in the middle
	[arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
	return pivotIndex;
}

function quickSort(arr, left, right) {
	if (left >= right) {
		return;
	}

	let partitionIdx = partition(arr, left, right);
	quickSort(arr, left, partitionIdx - 1);
	quickSort(arr, partitionIdx + 1, right);
}

function sort(arr) {
	quickSort(arr, 0, arr.length - 1);
}

sort(arr);
console.log(arr);