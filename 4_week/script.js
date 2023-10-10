
//constraints: FutureYear has to be later than or equal to the birthYear
//both input values are integers, length is at least, positive numbers, not below 1900
//We focus on positive integers
/*if(isNan(birthYear) || birthYear === 0){
  alert("This is not a number. Please try again");
  birthYear=+(prompt("Enter your year of your birthday: "));
}
else{

let futureYear= +prompt("Enter your desired year:");
if(isNan(futureYear) || futureYear === 0 ){
    
    futureYear=+(prompt("Enter your desired year: "));
  }
}

alert("This is not a number. Please try again");
console.log(birthYear);
console.log(futureYear);
*/
/*
let birthYear;
do {
    let birthYear=Number(prompt("Enter your year of your birthday: "));
} while(isNaN(birthYear) || birthYear ===0)

//let futureYear=Number(prompt("Enter your future date"));

do{
    let futureYear = +prompt("Enter future year: ");}
while(isNaN(futureYear) || futureYear ===0)

//check if  futureYear > or = to birthYear

if(futureYear > birthYear){
 let age= futureYear - birthYear;
 console.log("You will be  either ${age-1} or ${age} in ${futureYear}");
}
if(futureYear === birthYear){
 console.log("You born in ${futureYear}");
     }
else {
    alert("Error! You have not borned in ${futureYear}");
}
*/
/*Powercoders Exercise
let number= 1;
for(let number=1; number<=100; number++){
if ((number % 5 === 0) && (number % 7 ===0)){
        //continue;
          console.log("PowerCoders");
        //break;
    }

   else if((number % 5 === 0)){
          console.log("Power");
    }
    else if((number % 7 === 0)){
          console.log("Coders");
    }
    else{
        console.log(number);
    }
}
while(number<=100){ 
    if ((number % 5 === 0) && (number % 7 ===0)){
        //continue;
          console.log("PowerCoders");
        //break;
    }

   else if((number % 5 === 0)){
          console.log("Power");
    }
    else if((number % 7 === 0)){
          console.log("Coders");
    }
    else{
        console.log(number);
    }
    number++;
}
console.log("End of loop");
let direction ="left";
switch(direction){
    case "left" :
        console.log("I go left");
        break;
    case "right" :
        console.log("I go right");
        break;   
    //case "straight" :
    default:  
        console.log("I go straight ahead"); 
}
*/
let birthYear;
do {
    birthYear = Number(prompt("Enter your year of your birthday: "));
} while (isNaN(birthYear) || birthYear === 0)

let futureYear;
do {
    futureYear = +prompt("Enter future year: ");
} while (isNaN(futureYear) || futureYear === 0)

// Check if futureYear >= birthYear

if (futureYear > birthYear) {
    let age = futureYear - birthYear;
    console.log(`You will be either ${age - 1} or ${age} in ${futureYear}`);
} else if (futureYear === birthYear) {
    console.log(`You were born in ${futureYear}`);
} else {
    alert(`Error! You were not born in ${futureYear}`);
}

