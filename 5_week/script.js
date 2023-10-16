const birthYear= 1967;
const products=[];
let anotherYear = prompt("Give me a number");
const numberList =[6,9,1,15,20];
console.log(addValues(numberList));

const h1 = document.querySelector("h1");
console.log(h1);

function addValues(numbers){
    let sum =0;
    for(let i=0; i<numbers.length; i++) {
        console.log(numbers[i]);
    }
    numbers.array.forEach(function(number) {
        sum += number;
    });
    return sum;
}

