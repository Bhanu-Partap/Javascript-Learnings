// Ask from us
const age = prompt("hey , whats your age");
// age = Number.parseInt(age);

if (age < 0) {
  alert("this is an invalid age");
} 
else if(age<=18){
  alert("you are not eligible");
}
else if(age>18 && age<50){
  alert("you are eligible");
}
else if(age>50){
  alert("you are eligible, But take someone with you");
}
