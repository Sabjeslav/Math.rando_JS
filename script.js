"use strict";

//Task 1. Заполнить массив из 10 элементов случайными целыми числами от 100 до 200
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


const test = new Array();
for (let i = 0; i < 10; i++) {
  test.push(getRandomInt(100, 200));
}

/* Task 2.Создать функцию, которая принимает amout - количество создаваемых объектов,
создает указанное кол-во объектов пользователей с полями email, age, isMale.
  Поле email заполняется последовательно в формате user${i}@gmail.com. i - счетчик цикла.
  Поле age заполняется рандомно от 12 до 50 лет. (Только целые числа).
  Поле isMale заполняется рандомно значениями true или false. */

const User = function (email, age, isMale) {
  this.email = email;
  this.age = age;
  this.isMale = isMale;
}
  
function createObjects(amount) {
  const userArray = [];
  for (let i = 0; i < amount; i++) {
    const email = `user${i}@gmail.com`;
    const age = getRandomInt(12, 50);
    const isMale = Boolean(Math.random() < 0.5);
    const user = new User(email, age, isMale);
    userArray.push(user)
  }
  return userArray;
}

console.log(createObjects(5));
