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
function calculate() 
{
    let result;
    let number = document.getElementById("number").value;
    while(number < 0 || number > 20) {
        number=Number(prompt("Please enter a number between 0 and 20."))
      } 
          
    if(number>=0 && number <=20)
    {
        document.getElementById("number").value=number;
        if (number % 2 === 0) {
            result="Even";
            console.log("Your number is even.");
            } 
        else {
            result="Odd";
            console.log("Your number is odd.");
             }
     
        document.getElementById("result").innerText=result;
    }
    
}
    
