function bubbleSortDescending(arr) {
  let n = arr.length;
  // Outer loop for passes
  for (let i = 0; i < n - 1; i++) {
    // Inner loop for comparisons and swaps
    for (let j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements
      if (arr[j] < arr[j + 1]) { // Changed for descending order
        // Swap if elements are in the wrong order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const numbers = [40, 100, 1, 5, 25, 10];
const sortedNumbers = bubbleSortDescending(numbers);
console.log(sortedNumbers); 
