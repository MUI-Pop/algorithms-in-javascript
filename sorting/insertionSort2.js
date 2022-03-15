////////////////////////////////////////////////////
// Insertion Sort - alt
////////////////////////////////////////////////////

let arr = [10, 3, 5, 2, 1];


// 10, 3, 5, 2, 1 - i=1, j=0 => 3,10,5,2,1
// 3,10,5,2,1 - i = 0; j = -1; 
// 3,1,10

function sort(arr) {

	for (let i = 1; i < arr.length; i++) {
		let key = arr[i];

		// All case O(n^2)
		for (let j = i - 1; j >= 0; j--) {
			if (arr[j] > key) {
				arr[j + 1] = arr[j];
				arr[j] = key;
			}
		}
	}
}

sort(arr);
console.log(arr);