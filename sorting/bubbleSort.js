////////////////////////////////////////////////////
// Bubble Sort
////////////////////////////////////////////////////

let arr = [ 10, 3, 5, 1, 2 ];


function sort(arr) {
  for(let i=0; i < arr.length; i++) {

    
    for(let j=i+1; j < arr.length; j++) {
      if(arr[j] < arr[i]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
      }
    }
  }
}

sort(arr);
console.log(arr);