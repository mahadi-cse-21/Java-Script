// const student1 = {
//     name: "mahadi",
//     age:25,
//     id: "2021221104023",
//     department: "cse",
//     eat:function(){ console.log("i can eat!"); }
// }


// const student2 = {
//     name: "hassan",
//     age:23,
//     id: "2021221104024",
//     department: "cse",
//     eat: ()=>{ console.log(" i can eat very fast!!"); }
// }

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.id);
// console.log(student1.department);
// console.log(student1.eat());

// console.log(student2.name);
// console.log(student2.age);
// console.log(student2.id);
// console.log(student2.department);
// console.log(student2.eat());


// const person1 = {
//     name: "Mahadi Hassan",
//     favfood: "Halal Food anything specially sweet",
//     saygreeting: function() { console.log(`Hi i am ${this.name}`)  }
// }

// person1.saygreeting();

// console.log(this);


function Car(make,model, year, color)
{
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color

    this.drive = function() {  console.log(`you drive the ${this.model}`)  }

}

const car1 = new Car("ford","BMW",2024,"red");
const car2 = new Car("wil","tesla",2025,"black");


console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car1.drive();
car2.drive();