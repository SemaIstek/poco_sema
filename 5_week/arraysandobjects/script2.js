/* const birthYear= 1967;
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
//The codes above that I catched in the lesson.
//The codes below are the ones I got from my teacher. 16/10/2023

/** function (prompt, alert, arrow functions), loops (while, do while), DOM manipulation (get elements from DOM, e.g. querySelectorAll etc.), conditions (ternary, switch), variables (const), different data types (objects, array, strings incl. template literals, null, undefined, number incl. NaN), scope, events (click, blur, mouseover), class, debugging, operators for comparism, for mathematical operations, conversion of data types (string to number), length of strings */
const birthYear = 1967;
const products = [];
const product = {};
const elements = document.querySelectorAll("p");
console.log(elements);
elements.forEach(function(p,i){
    if(i===0){
        p.innerHTML = `<span>test</span><script>alert("script running");</script>`;
    } else if(i===1){
       const span = document.createElement("span");
       span.textContent = "test";
       p.appendChild(span);
    } else {
        p.innerText = "<span>test</span>";
    }
});
const h1 = document.querySelector("h1");
h1.textContent = "Title - click me";
h1.addEventListener("click", function(){
    h1.textContent += " - Thank you";
});
//let anotherYear = prompt("Give me a year");
const numberList = [6,9,1,15,20];
numberList.push(5);
numberList.unshift(1);
let newArray = numberList.concat([8,9,5]);
const max = {
    fname: "Max", 
    gender: "male", 
    age: 29, 
    married: true
};
const names = ["Mary","Marc","Max"];
/*
let addValues = function(numbers){
    let sum = 0;
    numbers.forEach(function(number){
        sum += number;
    });
   return sum;
} */
const sum = 5;
addValues(numberList);
function addValues(numbers){
    let sum = 0;
    numbers.forEach(function(number){
        sum += number;
    });
   return sum;
}


