function absoluteValuesSumMinimization(array){
    console.log(Math.floor(array.length / 2));
    let index = Math.floor(array.length / 2);
    console.log('index is: ', index);
    const isEven = array.length % 2 === 0;
    if (isEven) {
        return array[index - 1];
    } else {
        return array[index];
    }
}


console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));