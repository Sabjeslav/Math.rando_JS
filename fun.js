"use strict";

const fact = (n) => {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};

const rangeCounter = (from, to) => {
  if (from >= to) {
    return false;
  }
  console.log(from);
  rangeCounter(from + 1, to);
  return true;
};


function capitalize(string) {
  return (string.split(' ').map((item) => item[0].toUpperCase() + item.slice(1)).join(' '));
}

console.log(capitalize('I want pizza!'));