


// const person = {
//     fullname:"mahadi hassan",
//     age: 30,
//     hobbies: [ "read holy quran", "islamic book"],
//     address:{
//         city:"brahmanbaria",
//         village: "rajghar",
//         union: "natai"
//     }

// }

// console.log(person.address.city)
// console.log(person.name)
// console.log(person.age)
// console.log(person.hobbies)

class Person{
    constructor(name,age,...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address)
    }
}

class Address{
    constructor(street,city,country){
        this.city=city;
        this.street = street;
        this.country = country;
    }
}

const person1 = new Person("Mahadi hassan",23,"123,street road",
                                               "brahmanbaria",
                                               "bangladesh"
);

console.log(person1.name,person1.age,person1.address.city,person1.address.street,person1.address.country);