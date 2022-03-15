////////////////////////////////////////////////////
// Insertion Sort
////////////////////////////////////////////////////

let arr = [10, 3, 5, 2, 1];

// 10, 3, 5, 2, 1 - i=1, j=0 => 3,10,5,2,1
// 3,10,5,2,1 - i = 0; j = -1; 
//

function sort(arr) {

	let end = arr.length - 1;

	for (let i = 1; i < end; i++) {
		let key = arr[i];
		let j = i - 1;

		// Best case of O(n)
		while (j >= 0) {
			if (key < arr[j]) {
				arr[j + 1] = arr[j];
			}
			j--;
		}

		arr[j + 1] = key;
	}
}

sort(arr);
console.log(arr);