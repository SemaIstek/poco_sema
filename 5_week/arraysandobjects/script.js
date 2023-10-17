const food = {
    calories:250,
    vitamins: ["B12","C","A"],
    name: "Banana",
    contains:["nuts","gluten"],
    vegetarian:true,
    halal:true,
    expirary_date: "2023-10-10",
    category:"fruit",
    price: 5.90,
    edible:function(){
        let today = new Date();
        if(today.toISOString().split('T')[0]<this.expirary_date){
            return true;
        }
        return false;
    }
}

/*console.table(food);

console.log(food.name);
console.log(food["expirary_date"]);

console.log('Is my ${food.name) still edible?');
console.log(food.edible()); */
//object constructor
function Food2(calories,vitamins, name, contains, vegetarian =true, halal, expirary_date, category, price) {
    this.calories= calories;
    this.vitamins = vitamins;
    this.name = name;
    this.contains= contains;
    this.vegetarian = vegetarian;
    this.halal = halal;
    this.expirary_date =  expirary_date;
    this.category = category;
    this.price = price;
    this.edible = function(){
        let today = new Date();
        if(today.toISOString().split('T')[0]<this.expirary_date){
            return true;
        }
        return false;
    }
}
const banana = new Food2(600, ["B12","C","A"],"Banana", ["nuts","gluten"],true, true, "2023-10-10", "fruit", 5.90  );
//console.table(banana);
banana.mushy = true;
banana.expirary_date = "2023-10-23";
console.log(banana.edible());
console.table(banana)

class Food {
    constructor(calories,vitamins, name, contains, vegetarian =true, halal, expirary_date, category, price) {
        this.calories= calories;
        this.vitamins = vitamins;
        this.name = name;
        this.contains= contains;
        this.vegetarian = vegetarian;
        this.halal = halal;
        this.expirary_date =  expirary_date;
        this.category = category;
        this.price = price;
    }
    edible(){
        let today = new Date();
        if(today.toISOString().split('T')[0]<this.expirary_date){
            return true;
        }
        return false;
    }
}
    
    
    

let apple = new Food( 700, ["B12","C","A"],"Apple", ["nuts","gluten"],true, "halal", "2023-10-10", "fruit", 5.90);

console.table(apple);

if(apple.halal ==="halal"){
    console.log("You can eat");
    }