function addTwoDigits(n) {
    const numbers = n.toString().split('');
    const integerified = numbers.map(number => {
      return parseInt(number);
    });
    const result = integerified.reduce((acc, curVal) => {
      return acc + curVal;
    });
    // return parseInt(num[0]) + parseInt(num[1]);
  
    // console.log(final);
    return result;
  }
  
  // addTwoDigits(84)
  console.log(addTwoDigits(22133242));