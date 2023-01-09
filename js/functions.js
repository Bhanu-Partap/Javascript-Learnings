function Avg(x,y){
    return 1+(x+y)/2
    // <----Method to rounf off in js ---->
    // return Math.round( 1+(x+y)/2)

}

let a= 1
let b= 2
let c= 3
console.log(" the one plus average of a and b is " , Avg(a,b));
console.log(" the one plus average of b and c is " , Avg(b,c));
console.log(" the one plus average of c and a is " , Avg(c,a));