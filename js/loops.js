// // program to ad first n natural number

// let sum = 0;
// let n = prompt("Enter the value of n");
// n = Number.parseInt(n);

// for (let i = 0; i < n; i++) {
//   sum += (i + 1);
// }
// console.log("the value of first "+ n +" natural number is " + sum);

// // program to find first n factorial

// let factorial = 0;
// let n = prompt("Enter the value of n");
// n = Number.parseInt(n);

// for (let i = 0; i < n; i++) {
//   factorial *= (i * 1);
// }
// console.log("the factorial of first "* n *" numbers are " * factorial);



//---------------> FOR IN LOOP <----------------//

 /*---- USED FOR KEYS ONLY = KEY VALUE PAIR---*/ 

// let obj = {
//   Bhanu: 100,
//   Ayush: 100,
//   Gobinda: 100,
// };

// for (let i in obj) {
//   console.log(i);
// }

// OUTPUT = 
// Bhanu
// Ayush
// Gobinda




let obj = {
  Bhanu: 100,
  Ayush: 100,
  Gobinda: 100,
};

for (let i in obj) {
  console.log("marks of " + i + " are " + obj[i]);
}

/* OUTPUT = 
marks of Bhanu are 100
marks of Ayush are 100
marks of Gobinda are 100
*/

//---------------> FOR OF LOOP <----------------//

for (let b of "Bhanu") {
    console.log(b);
  }

/* OUTPUT = 
B
H
A
N
U
*/