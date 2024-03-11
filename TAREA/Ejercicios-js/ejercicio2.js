function computeSumAndProduct(numbers) {
    // Calculate the sum using the reduce function
    let sum = numbers.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
  
    // Calculate the product using the reduce function
    let product = numbers.reduce(function (accumulator, currentValue) {
      return accumulator * currentValue;
    }, 1);
  
    // Print out the results
    console.log("The sum is", sum + ".");
    console.log("The product is", product + ".");
  }
  
  // Example usage
  let exampleArray = [1, 2, 3, 4];
  computeSumAndProduct(exampleArray);

  