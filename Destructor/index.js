// let a = 1;
// let b = 2;
// [a,b] = [b,a];
// console.log(a,b);


const colors = ["red","green","yellow"];
[colors[0],colors[2]] = [colors[2],colors[0]];
console.log(colors);