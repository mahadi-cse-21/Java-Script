/*

topic:
1. Random function
2. Random number between a range


*/


// let random = Math.random();

// console.log(random); 


// let random = Math.floor(Math.random()*6)+1;
// console.log(random);


let min =0;
let max = 100;

let btn = document.getElementById('btn');
btn.onclick = function(){
    let val = Math.floor(Math.random()*max)+min;
    document.getElementById('random').innerHTML=val;
}