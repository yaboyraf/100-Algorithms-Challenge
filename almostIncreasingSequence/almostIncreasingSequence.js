const array = [1,3,2];

function almostIncreasingSequence(array) {
  let numbersWeNeedToRemove = [];
  for (let i = 0; i < array.length - 1; i++) {
    console.log(array[i]);
    if (array[i] > array[i + 1]) {
      numbersWeNeedToRemove.push(array[i]);
    }
  }
  console.log({ numbersWeNeedToRemove });
  if (numbersWeNeedToRemove.length === 1 || numbersWeNeedToRemove.length === 0) {
    return true;
  } else {
    return false;
  }
}

almostIncreasingSequence(array);