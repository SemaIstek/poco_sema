let number = 0;
do{ 

   number = Number(prompt("Please enter a number between 0 and 10"));

}
while((number<0)||(number>10)||(isNaN(number))||(number===null));
let array=[1,2,3,4,5,6,7,8,9,10];

for(let i=0; i<=10; i++){
    if(number===array[i]){
        const userGuess = parseInt(number);
        const stars = "*".repeat(userGuess);
        starDisplay.textContent = stars;
        document.querySelector("p").textContent="Your number is = " + array[i];
        break;

    }
}
