const prompt = require('prompt-sync')(); 
let bill = Number(prompt("Please enter amount of bill"));
console.log("Your Bill is" + bill);

let Person1 =(prompt("Ask Person 1 to enter amount"));
let Person2 =(prompt("Ask Person 2 to enter amount"));
 
if (Person1 - Person2 === 0){
    console.log("Thank you, your bill is evenly split")
} else if ((Person1 - Person2) >=0) {
    let result = (bill - Person1)
    console.log("Person 2 owes Person 1" + result + "")
} else if ((Person1 - Person2) <= 0) {
    let result = (bill - Person2)
    console.log("Person 1 owes Person 2" + result)}