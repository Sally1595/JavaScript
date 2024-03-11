function doubleArrayValues(numbers) {
    let doubledArray = numbers.map(function (num) {
    return num * 2;
  });

    console.log(doubledArray);
}

let exampleArray = [1, 2, 4, 5];
doubleArrayValues(exampleArray);
