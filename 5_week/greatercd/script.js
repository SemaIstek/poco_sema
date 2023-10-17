let num1, num2;
do
{
    num1 = +prompt("Please enter a positive number");
    num2 = +prompt("Please enter a positive number");
}
while(isNaN(num1)||isNaN(num2)||(num1<0)||(num2<0));
    do { 
        while(num2!=0){
            let temp = num2;
            num2 = num1%temp;
            num1 = temp;
        }
        console.log(num1);
        }
    while(num1>0 && num2>0)
    document.querySelector("h1").textContent = num1;
