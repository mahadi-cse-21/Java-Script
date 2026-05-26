/*

.map()  = accepts a callback and applies that function
          to each element of an arary , then return new array


*/


const numbers = [1,2,3,4,5];

const square1 = numbers.map(square);
console.log(square1);

function square(num)
{
    return Math.pow(num,2);
}
function cube(num)
{
    return Math.pow(num,3);
}

const cube1 = numbers.map(cube);

console.log(cube1);


