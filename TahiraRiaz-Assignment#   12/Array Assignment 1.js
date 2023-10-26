// Array indexes start with 0:

// [0] is the first array element
// [1] is the second
// [2] is the third ...

// JavaScript Arrays
// The length Property






//   ----------------------------      The Push Method       ------------------------------------
// This method adds one or more elements to the end of an array and returns the new length of the array.

let fruits = ['orange', 'banana', 'grapes'];

fruits.push('apple');

console.log(fruits);





// //   -----------------------------------         pop()      -------------------------------------------
// // This method removes the last element from an array and returns the removed element.

// let animals = ['lion', 'tiger', 'elephant', 'giraffe'];

// let lastanimals = fruits.pop();

// console.log(animals);   // [ 'lion', 'tiger', 'elephant', 'giraffe' ]

// console.log(lastanimals);  // [ 'lion', 'tiger', 'elephant' ]





//   -----------------------------------         unshift()      -------------------------------------------
// This method adds one or more elements to the beginning of an array and returns the new length of the array.

// let fruit = ['apple', 'banana', 'grapes'];

// fruit.unshift('cherry');

// console.log(fruit);





// //   -----------------------------------          shift()     -------------------------------------------
// // The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array

// const array1 = ['red', 'blue', 'green', 'yellow' ];

// const firstElement = array1.shift();

// console.log(array1);

// console.log(firstElement);




//   -----------------------------------          splice()     -------------------------------------------
// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place


// let fruits = [ 'apple', 'banana', 'grapes', 'cherry' ];

// let removedFruits = fruits.splice(2, 1, 'peach');

// console.log(fruits);    // [ 'apple', 'banana', 'peach', 'cherry' ]

// console.log(removedFruits);  // ["grapes"]



//   -----------------------------------          forEach()    -------------------------------------------
// This method executes a provided function once for each element in an array.


// let originalnumber = [2, 4, 6, 8];
// let modifiednumber = [];

// originalnumber.forEach(function(number) {
//   modifiednumber.push(number * 2);
// });

// console.log(modifiednumber);





// let flowers = ['daisy', 'lily'];

// flowers.push('rose', 'tulip');

// console.log(flowers);





// let names = ['Alice', 'Bob', 'Charlie', 'David'];

// names.splice(1, 2);

// console.log(names);





// let fruits = ['apple', 'banana', 'grapes'];

// fruits.forEach(function(fruit, index, array) {
//   array[index] = 'fresh ' + fruit;
// });
// console.log(fruits);





// let seasons = ['spring', 'autumn'];

// seasons.unshift('summer', 'winter');

// console.log(seasons);





