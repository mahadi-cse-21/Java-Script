
const array = ["apple", "banana", "orange"];
console.log(array);


//// rest parameeter


function combine(...foods)
{
    return foods.join("-");
}

const name  = combine("hassan","bannah", "joluy");
console.log(name);