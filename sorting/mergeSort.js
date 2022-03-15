

////////////////////////////////////////////////////
// Merge Sort
////////////////////////////////////////////////////
let arr = [10, 3, 5, 2, 1, 11];

function merge(lArr, rArr, storeArr) {
	let leftL = 0;
	let rightL = 0;
	let storeL = 0;

	while (leftL < lArr.length && rightL < rArr.length) {
		if (lArr[leftL] < rArr[rightL]) {
			storeArr[storeL] = lArr[leftL];
			leftL++;
		}
		else {
			storeArr[storeL] = rArr[rightL];
			rightL++
		}
		storeL++;
	}

	while (leftL < lArr.length) {
		storeArr[storeL] = lArr[leftL];
		leftL++;
		storeL++;
	}

	while (rightL < rArr.length) {
		storeArr[storeL] = rArr[rightL];
		rightL++
		storeL++;
	}
}

function sort(arr) {

	let n = arr.length;

	if (n < 2) {
		return;
	}

	let mid = Math.floor(n / 2);
	let leftArr = arr.slice(0, mid);
	let rightArr = arr.slice(mid, n);

	sort(leftArr);
	sort(rightArr);

	merge(leftArr, rightArr, arr);
}

sort(arr);
console.log(arr);