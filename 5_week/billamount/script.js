let bill;
let tip;
let i=0;
do {
if(i>0){
    alert("Please enter correct number");
}
 bill=Number(prompt("Enter your bill amount:"));
 tip =Number(prompt("Enter your tip percent amount: ")); 
    
 i++;

}
while((isNaN(bill))||(isNaN(tip))||(bill<=0)||(tip<0));

function check(){
    if(i>0){
        return true;
        
    }
    else return false;

}

function calculate(bill,tip){

let percent = +(bill*tip/100);
let total  = +(bill+percent);
document.querySelector("h1").textContent="Your bill amount is " + bill+ " and your tip amount is " + percent+ " Total amount is "+ Math.round(total);

}
calculate(bill, tip);
