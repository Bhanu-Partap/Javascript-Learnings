// const $name = "Bhanu";
// character + string = string
// number= int + float
// list object tyype = array
// variable is used as a bag

// props nd methods
// let string = "bhanu";

// method = function of string

// console.log(string.indexOf("a"))
// let index = string.indexOf("a");

let array = [
  { name: "Bhanu", age: 20 },
  { name: "Priya", age: 20 },
  { name: "Ayush", age: 22 },
  { name: "Gobinda", age: 22 },
  { name: "Gg", age: 22 },
];

// const data = array.map(item => {
//     return (document.write(`<h1>${item.name}</h1>`))
// });

const data = array.push((item) => {
  return console.log((item.name = "Bhanu"));
});

console.log(data);
