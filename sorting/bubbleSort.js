////////////////////////////////////////////////////
// Bubble Sort
////////////////////////////////////////////////////

let arr = [10, 3, 5, 1, 2];
//arr = [ 1, 2, 3, 5, 10 ];

function sort(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		let found = false;
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[j+1]) {
				let temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
				found = true;
			}
		}

		if(!found) {
			// Best case O(n)
			//console.log('Exiting early as no match found'); 
			break;
		}
	}
}

sort(arr);
console.log(arr);