/*Declare 2 variables, both numbers
Compare which number is greater
Log the output, e.g. "The greater number of 5 and 10 is 10."
Add an output for the else statement, e.g. "The smaller number of 5 and 10 is 5."
*/
let num1= 0;
let num2=0;
do { 
    num1 = +prompt("Please enter a number:");
    num2 = +prompt("Please enter a number:");

    bigger(num1,num2);

}
while((isNaN(num1))|| (isNaN(num2)) || (num1===null) ||(num2===null));

function bigger(num1,num2){

    if(num1>num2){
        document.querySelector("h1").textContent= "The greater number of " + num1 +" and "+ num2+ " is "+ num1;
    }
    else if(num2>num1){
        document.querySelector("h1").textContent= "The greater number of " + num1 +" and "+ num2+ " is "+ num2;
    }
    else if(num2===num1) {
        document.querySelector("h1").textContent= "The greater number of " + num1 +" and "+ num2+ " is equal eachother";
    }
}