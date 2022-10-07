class Person{
    constructor(firstName, secondName, age, email){
        this.firstName = firstName;
        this.secondName = secondName;
        this.age = age;
        this.email = email
    }
    toString(){
        return `${this.firstName} ${this.secondName} (age: ${this.age}, email: ${this.email})`
    }
}

let person = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");
console.log(person.toString());
