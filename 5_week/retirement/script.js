/* Create a program that determines how many years you have left until retirement and the year you can retire. It should prompt for your current age and the age you want to retire and display the output as shown in the example that follows on the next slide.
*/
function getAge(){
    let age = 0;
    let retirement = 0;

    do{ 
        age = prompt("Please enter your age:");
        retirement= prompt("Please enter your retirement age :");
    
       
    } while((age===null)||(retirement===null)||(age<=0)||(retirement<=0));

    calculate(age,retirement);
}

function calculate(age,retirement){

    if((isNaN(age))||(isNaN(retirement))){
        getAge();
    }

    else { 
    let year =0;
    if (age<retirement)
    {
     year= retirement-age;
    }
    let date = new Date().getFullYear();
    let newDate = date + year;
    document.querySelector("h1").textContent="You are the age of "+ age+ " and You will retire " +year+" later. Your retire date is: " + newDate;
}
}

getAge();