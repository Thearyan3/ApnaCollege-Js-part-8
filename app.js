// // 1. Array methods :- 

// // (i). forEach function --> 

// let arr = [1, 2, 3, 4, 5];

// arr.forEach((el) => {
//     console.log(el);
// })
// let print = function(el) {
//     console.log(el);
// }
// arr.forEach(print);

// let arr1 = [{
//     name: "Aryan", 
//     marks: 95
// },
//  {
//     name: "Tarun", 
//     marks: 59
// },
//  {
//     name: "Arun", 
//     marks: 81
// }];
// arr1.forEach((student) => {
//     console.log(student);
// });
// arr1.forEach((student) => {
//     console.log(student.marks);
// });



// // (ii). map function --> 

// let num = [1, 2, 3, 4];
// let double = num.map((el) => {
//     return el*2;
// });
// let gpa = arr1.map((el) => {
//     console.log(el.marks/10);
// });
// // (iii). filter function --> 
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 2, 1, 23, 10, 12];
//  let ans = nums.filter((el) => {
//     return !(el%2 == 0);
//  });

// (iii). Every function - Returns true if every element of array gives true for some function. Else return false. 
// (iv). Sum function - Returns true if some element of array gives true for some function. Else return false.
// (v). Reduce function - Reduce the array to a single value. Syntax : arr.reduce(reducer function with 2 variables for(accumulator, element));
// let nums = [1, 2, 3, 4, 5, 6, 7];
// let finalVal = nums.reduce((res, el) => {
//     console.log(res);
//     return res+el;
// });
// console.log(finalVal);

let arr = [1, 2, 3, 4, 5, 6, 9, 11, 2, 3, 1];
// let max = -1;
// for(let i=0; i<arr.length; i++){
//     if(max < arr[i]){
//          max = arr[i];
//     }
// }
// console.log(max);