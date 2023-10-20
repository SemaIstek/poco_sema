
//function declaration
function sayGoodMorning(name){
//do something
console.log("Good Morning" + name);

}

//function expression
const sayHello = name =>{
    console.log("Hello" + name);
}

sayHello("Sema");
const library= ["Harry Potter","Lord of Rings"];
library.forEach((book) =>{
    console.log(book);
});
//If you have only one parametres
param =>{
    console.log(param);
}

()=> {
    console.log("Hello");
}
(a,b) => {
    console.log(a+b);
}
const sum = (a,b) => a+b;
const book1={
    title:"Harry Potter",
    author:"JK Rowling",
    series:"Harry Potter 3",
    publishe:2002,
    getbookInfo: function(){
        console.log(this.author);
    }
}
book1.getbookInfo();

const book1={
    title:"Harry Potter",
    author:"JK Rowling",
    series:"Harry Potter 3",
    publishe:2002,
    getbookInfo(){
        console.log(this.author);
    }.
    getSeries(){
        concole.log(this.title);
    }
}
book1.getbookInfo();
book1.getSeries();
