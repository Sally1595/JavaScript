function doubleArrayValues(numbers) {
    // Use the map function to double each value in the array
    let doubledArray = numbers.map(function (num) {
      return num * 2;
    });
  
    // Print out the new updated array
    console.log(doubledArray);
  }
  
  // Example usage
  let exampleArray = [1, 2, 4, 5];
  doubleArrayValues(exampleArray);