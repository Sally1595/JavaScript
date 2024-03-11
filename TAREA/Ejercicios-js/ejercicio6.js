function bubbleSort(inputArray) {
    let len = inputArray.length;
    let swapped;
  
    do {
      swapped = false;
  
      for (let i = 0; i < len - 1; i++) {
        if (inputArray[i] > inputArray[i + 1]) {
          // Swap elements if they are in the wrong order
          let temp = inputArray[i];
          inputArray[i] = inputArray[i + 1];
          inputArray[i + 1] = temp;
  
          swapped = true;
        }
      }
    } while (swapped);
  
    return inputArray;
  }
  
  // Example usage
  let inputArray = [3, 6, 12, 5, 100, 1];
  let sortedArray = bubbleSort(inputArray);
  
  console.log(sortedArray);
  