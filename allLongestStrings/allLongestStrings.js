const inputArray = ["aba", "aa", "abcd", "ad", "vcd", "abcd", "aba"]

function allLongestStrings(inputArray) {
  let currentLongestLength = 0;
  let longestStrings = [];
  inputArray.forEach(value => {
    if (value.length > currentLongestLength) {
      currentLongestLength = value.length;
      longestStrings = [];
    }
    if (value.length === currentLongestLength) {
      longestStrings.push(value);
    }
  });
  console.log(longestStrings);
}

allLongestStrings(inputArray);