// Qs 1. Square and sum all the array elements using the arrow function and then find the average of the array.

let arr = [1, 2, 3, 4, 6];
const square = arr.map((n) => n*n);
console.log(square);

let sum = square.reduce((acc, cur) => acc + cur);
console.log(sum);
let Avg = sum/arr.length;
console.log(Avg);


// Qs 2. Create a new array using the map function whose each element is equal to the original elemnent plus 5. 
let arr1 = [1, 2, 3, 4, 6];
let newArr = arr1.map((n) => n+5);
console.log(newArr);

// Qs 3. Create a new array whose elements are in uppercase of words present in the original array.
let arr2 = ["aryan", "tanwar", "bhagat", "sahibzaade"];
let newarr2 = arr2.map((n) => n.toUpperCase());
console.log(newarr2);


// Qs 4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.  The function should return a new array with the original array values and all of the additional arguments doubled.
const doubleAndReturnArgs = (arr3, args) => [...arr3, ...args.map((v) => v*2)];
doubleAndReturnArgs([1, 2, 3, 4, 5]);


// Qs 5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second. 
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2}); 
let obj1 = { a: 1, b: 2};
let obj2 = { c: 1, d: 2};