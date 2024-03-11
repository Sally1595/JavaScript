function computeSumAndProduct(numbers) {
    let sum = numbers.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);

    let product = numbers.reduce(function (accumulator, currentValue) {
      return accumulator * currentValue;
    }, 1);
  
    console.log("The sum is", sum + ".");
    console.log("The product is", product + ".");
  }
  
  let exampleArray = [1, 2, 3, 4];
  computeSumAndProduct(exampleArray);
  