// 1. Array methods :- 

// (i). forEach function --> 

let arr = [1, 2, 3, 4, 5];

arr.forEach((el) => {
    console.log(el);
})
let print = function(el) {
    console.log(el);
}
arr.forEach(print);

let arr1 = [{
    name: "Aryan", 
    marks: 95
},
 {
    name: "Tarun", 
    marks: 59
},
 {
    name: "Arun", 
    marks: 81
}];
arr1.forEach((student) => {
    console.log(student);
});
arr1.forEach((student) => {
    console.log(student.marks);
});



// (ii). map function --> 

let num = [1, 2, 3, 4];
let double = num.map((el) => {
    return el*2;
});
let gpa = arr1.map((el) => {
    console.log(el.marks/10);
});
// (iii). filter function --> 
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 2, 1, 23, 10, 12];
 let ans = nums.filter((el) => {
    return !(el%2 == 0);
 });

// (iv). some function --> 
// (v). every function --> 
// (vi). reduce function --> 
