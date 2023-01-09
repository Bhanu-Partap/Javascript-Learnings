// const obj = {
//     name: "Bhanu",
//     age: 20,
// };

// function object() {
//     this.name = "Bhanu";
//     this.age = 21;
// }

// // console.log(obj.name);

// function Person(){
//     (this.name = "Bhanu"), (this.age = 22);
// }

// const person = new Person(); 
// const person2 = new Person(); 
// person2.location = "Shimlapuri";
// console.log(person);

// // new is  constructor and we are using this NEW Person function 

// console.log(person2);

class Person {
    greet(){
        console.log("hello world");
    }
}

const person = new Person();

console.log(person.greet());