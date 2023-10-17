class OurTeam{ 
constructor(name, color,book, movie, programm, food, fruit, toy) {
    this.name=name;
    this.color= color;
    this.book = book;
    this.movie= movie;
    this.programm = programm;
    this.food = food;
    this.fruit =  fruit;
    this.toy = toy;
    }
}

let damla = new OurTeam ("damla","red","HarryPotter",  "MissionImposible", "JavaScript", "manti", "strawberry", "toy");
let melike = new OurTeam ("melike", "purple","HarryPotter2", "Ataturk", "JavaScript", "sarma", "banana", "tedybear");

function render(person){
   const prf = document.createElement("h1");
    prf.textContent = melike.name;
}

//document.querySelector("h1").textContent = damla.book;
//document.querySelector("h1").textContent = melike.book;

/*let array=["red","blue","green","purple"];

console.log("Your first choice is " + array[0]);
console.log("Your second choice is " + array[1]);
*/
class Recipe{ 
    constructor(name, servings, ingredints) {
        this.name=name;
        this.servings= servings;
        this.ingredints = ingredints;
        
        }
    }
    let soup = new Recipe("ChickenSoup","4",["chicken","carotte","milk"]);

    document.querySelector("h1").textContent = soup.name;
    document.querySelector("p").textContent = soup.servings;
    document.querySelector("main").textContent = soup.ingredints;
    

