"use strict";

/*Task 1. Заполнить массив из 10 элементов случайными целыми числами от 100 до 200

const test = new Array();
for (let i = 0; i < 10; i++) {
  test.push(getRandomInt(100, 200));
}
 */
/* Task 2.Создать функцию, которая принимает amout - количество создаваемых объектов,
создает указанное кол-во объектов пользователей с полями email, age, isMale.
  Поле email заполняется последовательно в формате user${i}@gmail.com. i - счетчик цикла.
  Поле age заполняется рандомно от 12 до 50 лет. (Только целые числа).
  Поле isMale заполняется рандомно значениями true или false. */

const NATIONALITIES = ["ua", "uk", "fr", "ge", "swe", "us"];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomBoolean() {
  return Math.random() < 0.5;
}

function getNationalities() {
  return NATIONALITIES[getRandomInt(0, NATIONALITIES.length)];
}

const User = function (
  fName,
  lName,
  email,
  age,
  nationality,
  isMale,
  isSubscribed
) {
  this.fName = fName;
  this.lName = lName;
  this.email = email;
  this.age = age;
  this.nationality = nationality;
  this.isMale = isMale;
  this.isSubscribed = isSubscribed;
};

function UserProto() {
  this.getFullName = function getFullName() {
    return `${this.fName} ${this.lName}`;
  };
}

function filterArray(array) {
  return array.filter(function (user) {
    return user.age >= 18 && !user.isMale && user.isSubscribed;
  });
}

User.prototype = new UserProto();

function createObjects(amount) {
  const userArray = [];
  for (let i = 0; i < amount; i++) {
    const fName = `FirstName${i}`;
    const lName = `Surname${i}`;
    const email = `user${i}@gmail.com`;
    const age = getRandomInt(12, 50);
    const nationality = getNationalities();
    const isMale = getRandomBoolean();
    const isSubscribed = getRandomBoolean();
    const user = new User(
      fName,
      lName,
      email,
      age,
      nationality,
      isMale,
      isSubscribed
    );
    userArray.push(user);
  }
  return userArray;
}

const usersList = createObjects(5);
console.log(usersList);
