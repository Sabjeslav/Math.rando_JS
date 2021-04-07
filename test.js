"use strict";

const numbers = [1, 1, 32, 21, 32, 3, 9, 8];
const numbers2 = [1, 2, 3, 441, 52, 3, 1, 8];

function almostConcat(arr1, arr2) {
  const newArray = [...arr1, ...arr2];
  return newArray;
}

console.log(almostConcat(numbers, numbers2));