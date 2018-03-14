class Person{
    constructor(name, favColor){
        this.name = name;
        this.favColor = favColor;
    }
    sayHi(){
        return `Hello, my name is ${this.name}`;
    }
}

class SuperPerson extends Person {
    constructor(name, favColor, phrase){
        super(name, favColor);
        this.phrase = phrase;
    }
    sayBye(){
        return `My name is ${this.name}, peace out.`
    }
    sayPhrase(){
        return this.phrase
    }
    sayHello(){
        return super.sayHi() + ' and welcome to Jackass'
    }
}

const john = new SuperPerson('John', 'hot pink', 'I\'ll see you then, or I\'ll see you on another time.');

console.log('John: ', john.sayHi());
console.log('John: ', john.sayBye());
console.log('John: ', john.sayPhrase());
console.log('John: ', john.sayHello());