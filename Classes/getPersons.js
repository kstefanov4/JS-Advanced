function persons(){
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

    return [
        new Person('Anna', 'Simpson', 22,'anna@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Johnson', 25),
        new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')
    ]
}

console.log(persons())