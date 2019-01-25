function absoluteValuesSumMinimization(array){
    //variable to check if array has even or odd index
    const isEven = array.length % 2 === 0;

    console.log(isEven);
    //console.log(array[Math.floor(array.length / 2)]);
    
    return isEven ? array[array.length / 2 - 1] : array[Math.floor(array.length / 2)];
}


console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));