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

let PersonOne = new Person('Morten', 28);
console.log(PersonOne);

PersonOne.SayHi();