const secondLargest = (array) => {
  array = [...new Set(array)];
  let largest = Math.max(...array);
  let index = array.indexOf(largest);
  if (index != -1) {
    array.splice(index, 1); // remove 1 element from index
  }
  return Math.max(...array);
};

console.log(secondLargest([1, 3, 65, 65, 41, 65]));
