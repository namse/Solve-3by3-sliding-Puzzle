function isItAnswer(array) {
  for(var i = 1; i < 9; i++) {
    if (array[i-1] !== i) {
      return false;
    }
  }
  return true;
}
function solve(array) {
  var midterm = [{
    array,
    count: 0,
  }];
  var index = 0;
  while(true) {
    var item = midterm[index];
    var currentArray = item.array;
    var currentCount = item.count;
    if (isItAnswer(currentArray)) {
      return currentCount;
    }
    var indexOfZero = currentArray.indexOf(0);
    if (indexOfZero > 2) { // not 0, 1, 2
      var newArray = currentArray.slice(); // copy array
      // Exchange zero and up
      var temp = newArray[indexOfZero];
      newArray[indexOfZero] = newArray[indexOfZero - 3];
      newArray[indexOfZero - 3] = temp;
      midterm.push({
        array: newArray,
        count: currentCount + 1,
      });
    }
    if (indexOfZero < 6) { // not 6, 7, 8
      var newArray = currentArray.slice(); // copy array
      // Exchange zero and bottom
      var temp = newArray[indexOfZero];
      newArray[indexOfZero] = newArray[indexOfZero + 3];
      newArray[indexOfZero + 3] = temp;
      midterm.push({
        array: newArray,
        count: currentCount + 1,
      });
    }
    if (indexOfZero % 3 !== 0) { // not 0, 3, 6
      var newArray = currentArray.slice(); // copy array
      // Exchange zero and left
      var temp = newArray[indexOfZero];
      newArray[indexOfZero] = newArray[indexOfZero - 1];
      newArray[indexOfZero - 1] = temp;
      midterm.push({
        array: newArray,
        count: currentCount + 1,
      });
    }
    if (indexOfZero % 3 !== 2) { // not 2, 5, 8
      var newArray = currentArray.slice(); // copy array
      // Exchange zero and right
      var temp = newArray[indexOfZero];
      newArray[indexOfZero] = newArray[indexOfZero + 1];
      newArray[indexOfZero + 1] = temp;
      midterm.push({
        array: newArray,
        count: currentCount + 1,
      });
    }
    index++;
  }
}

solve([1, 0, 3, 4, 2, 5, 7, 8, 6]);
