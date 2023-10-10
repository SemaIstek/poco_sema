/*let number = Number(prompt("Enter a number between 0 and 20"));

if (number >= 0 && number <= 20) {
    if (number % 2 === 0) {
        console.log("Your number" +number+ "  is even.");
    } else {
        console.log("Your number is odd.");
    }
} else {
    console.log("You did not enter a number between 0 and 20.");
}
*/
function calculate() {
    
    var number = document.getElementById("number").value;
    do {
  number=Number(prompt("Please enter a number between 0 and 20."))
} while(number < 0 || number > 20)
    if(number>=0 && number <=20){
        if (number % 2 === 0) {
        console.log("Your number is even.");
    } else {
        console.log("Your number is odd.");
    }
}
    
}