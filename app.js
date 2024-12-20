// 1. Array methods :- 

// (i). forEach function --> 

//let arr = [1, 2, 3, 4, 5];

// arr.forEach((el) => {
//     console.log(el);
//})
//let print = function(el) {
// //     console.log(el);
// // }
// // arr.forEach(print);

// // let arr1 = [{
// //     name: "Aryan", 
// //     marks: 95
// // },
// //  {
// //     name: "Tarun", 
// //     marks: 59
// // },
// //  {
// //     name: "Arun", 
// //     marks: 81
// // }];
// // arr1.forEach((student) => {
// //     console.log(student);
// // });
// // arr1.forEach((student) => {
// //     console.log(student.marks);
// // });



// // // (ii). map function --> 

// // let num = [1, 2, 3, 4];
// // let double = num.map((el) => {
// //     return el*2;
// // });
// // let gpa = arr1.map((el) => {
// //     console.log(el.marks/10);
// // });
// // // (iii). filter function --> 
// // let nums = [1, 2, 3, 4, 5, 6, 7, 8, 2, 1, 23, 10, 12];
// //  let ans = nums.filter((el) => {
// //     return !(el%2 == 0);
// //  });

// // (iii). Every function - Returns true if every element of array gives true for some function. Else return false. 
// // (iv). Sum function - Returns true if some element of array gives true for some function. Else return false.
// // (v). Reduce function - Reduce the array to a single value. Syntax : arr.reduce(reducer function with 2 variables for(accumulator, element));
// let nums = [1, 2, 3, 4, 5, 6, 7];
// let finalVal = nums.reduce((res, el) => {
//     console.log(res);
//     return res+el;
// });
// console.log(finalVal);

// let arr = [1, 2, 3, 4, 5, 6, 9, 11, 2, 3, 1];
// let max = -1;
// for(let i=0; i<arr.length; i++){
//     if(max < arr[i]){
//          max = arr[i];
//     }
// }
// console.log(max);

// let ans = arr.reduce((max, el) => {
//     if(max > el){
//         return max;
//     }else{
//         return el;
//     }
// });
// console.log(ans);

// // Practice Qs 1. Check if all the numbers in an array are multiples of 10.
// let arr2 = [10, 20, 30, 40, 50];
// let ans2 = arr2.every((el) => el % 10 == 0);
// console.log(ans);


// // Practice Qs 2. Create a function to find the min number in an array.
// let arr1 = [10, 20, 0, 30, 40, 50];
// function getMin(arr1) {
//     let finalVal = arr1.reduce((min, el) => {
//         if (min < el) {
//             return min;
//         } else {
//             return el;
//         }
//     });
//     return finalVal;
// }
// getMin(arr1);



// 2. Default Parameters - Giving a default value to the arguments. 
// function sum(a, b = 2) {
//     return a+b;
// }
// sum(1);
// sum(2, 4);



// 3. Spread - Expands an iterable into multiple values. 
// console.log("aryan");// This is normal string.
// console.log(..."aryan");// This is spread.

// let arr = [1, 2, 3, 5, 7, 0, -2, -334, 100, 3, 2, 1];
// console.log(Math.min(...arr));// This is spread

// Spread with array literals :- 
// let arr = [1, 2, 3, 4];
// let newarr = [...arr];
// console.log(arr);
// let char = [..."hello"];
// console.log(char);
// let odd = [1, 3, 5, 7];
// let even = [2, 4, 6, 8];
// let nums = [...odd, ...even];
// console.log(nums);

// Spread with object literals :-
let data = {
    name: "Aryan", 
    email: "aryan@3453gmail.com"
};

let dataCopy = {...data, id: 123, country: "India"};
console.log(data, dataCopy);