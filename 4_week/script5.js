/*let number=Number(prompt("Enter a number between 0-10"));

if (number >= 0 && number <= 10) {
   let multi=number*9;
        console.log(`Your result is =  ${multi}`);
    }
 else {
    console.log("You did not enter a number between 0 and 10.");
}
*/
/*
let number;

do {
    number = Number(prompt("Enter a number between 0 and 10:"));
} while (number < 0 || number > 10);

let multi = number * 9;
console.log(`Your result is = ${multi}`);
*/

function calculate() {
    
    var number = document.getElementById("number").value;
    if(number>=0 && number <=10){
        let result=number*9;
       console.log(number+" * ", "9 = "+ result);
    }
    else{ 
         do {
  number=Number(prompt("Please enter a number between 0 and 10."))
} while(number < 0 || number > 10)
  
}
}