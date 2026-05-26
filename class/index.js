class Product{
    constructor(name,price){
        this.name = name,
        this.price = price
    }
    diplayProduct(){
        console.log(`Product : ${this.name}`);
        console.log(`Price : ${this.price}`);
    }

    calculatedtax(salestex){
        return this.price + (this.price*salestex);
    }
}

const product1 = new Product("Car",100);
const product2 = new Product("Bus",20000);
const product3 = new Product("train",400000);


product1.diplayProduct();
product2.diplayProduct();
product3.diplayProduct();


const total = product3.calculatedtax(10);
console.log(total);