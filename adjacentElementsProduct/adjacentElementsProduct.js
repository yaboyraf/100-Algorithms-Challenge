const array = [3, 6, -2, -5, 7, 3, 2];
let currentHighest = array[0] * array[1];

for (let i = 0; i < array.length - 1; i++) {
  const currentProduct = array[i] * array[i + 1];
  if (currentProduct > currentHighest) {
    currentHighest = currentProduct;
  };
  console.log({currentHighest})
}