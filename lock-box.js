const prompt = require('prompt-sync')(); 
let pin = Number(prompt("Enter 4 digit Pin"));

if (pin === 5761) {
    console.log("success")

}else console.log("error")