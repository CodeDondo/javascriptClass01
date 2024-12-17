class Person{

    #PrivateAbility;

    constructor (name, age){
        this.name = name;
        this.age = age;
        this.#PrivateAbility = 'I am a private ability';
    }

    SayHi(){
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old and this is my private ability: ${this.#PrivateAbility}`);
    }
}

class Employee extends Person{
    constructor(name, age, job, income, position){
        super(name, age);
        this.job = job;
        this.income = income;
        this.position = position;
    }

    EmployeeSayHi(){
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old and I am a ${this.job} and I earn ${this.income} and I am an ${this.position}`);
    }
}

let PersonOne = new Person('Morten', 28);
let EmployeeOne = new Employee('Morten', 28, 'Developer', 50000, 'Junior');

PersonOne.SayHi();
EmployeeOne.EmployeeSayHi();