//      learing session 1
/*
topic:
1. console.log
2. window.alert
*/
//-------------------------------

// console.log('hello');

// console.log('I am learning javascript');


// // window.alert('This is an test alert');

//      Learning session 2
//-------------------------------

/*

topic:
1. accessing html element using id  and change the content of the element
2. use of document.getElementById()

*/


// document.getElementById('myh1').innerHTML = "O nice this is interactive";
// document.getElementById('myp').innerHTML = "this is a paragraph using html";


//      Learrning session 3
///-------------------------------
/*
topic:
1.work with variable
2. check data type
3. show value of variable in html element content

*/

// let x;
// x = 5;
// console.log(x);


// let age = 25;
// let price = 15.5;
// let cgpa = 3.37;
// console.log(age, price, cgpa);
// console.log(`my age is ${age}`, typeof age);
// console.log(`my price is ${price}`);
// console.log(`my cgpa is ${cgpa}`);


// let name = "Mahadi Hassan";
// let university = " Kishoreganj University";
// console.log(name,university);

// let name = "Mahadi Hassan";
// document.getElementById('name').innerHTML = name;

//       Learning session 4
//-------------------------------
/*
topic:
1. use of arithmetic operator 
2. show the result of arithmetic operation in html element content

*/


// let val1 = 10;
// let val2 = 20;

// let sum = val1 + val2;
// let sub = val2 - val1;
// let mul = val1 * val2;
// let div = val2 / val1;
// let mod = val2 % val1;

// console.log(`the sum of ${val1} and ${val2} is ${sum}`);
// console.log(`the sub of ${val1} and ${val2} is ${sub}`);
// console.log(`the mul of ${val1} and ${val2} is ${mul}`);
// console.log(`the div of ${val1} and ${val2} is ${div}`);
// console.log(`the mod of ${val1} and ${val2} is ${mod}`);

// document.getElementById('mysum').innerHTML = sum;


//       Learning session 5
//------------------------------

/*
topic:
1. use of window.prompt to get user input
2. show the user input in html element content
3. use of template literal to show the user input in html element content
*/

// let username;

// username = window.prompt('Please enter you name: ');
// console.log(`Welcome ${username} to the world of javascript`);

// let username; 
// document.getElementById('mybtn').onclick = function() {
//     username = document.getElementById('myinput').value;
//     document.getElementById('myh1').textContent = `Welcome ${username} to the world of javascript`;
// }

//      Learning session 6
//   -------------------------------
/*
topic:
1.constant variable use
2. work with html element

*/


// const PI  = 3.1416;
// let radius ;
// let area = PI*radius;
// document.getElementById('btn').onclick = function()
// {
//     radius = document.getElementById('radius').value;
//     document.getElementById('area').textContent = PI*radius*radius;
// }