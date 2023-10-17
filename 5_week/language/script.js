
function userLang(){
    let lang ="";
    do { 
    lang = prompt("Please enter a language en/de/es: ");
    
       } 
    while(lang === "")
       
    language(lang);
    }


function language(lang) 
    {  
        switch(lang.toLowerCase()){
        case "en": document.querySelector("h1").textContent= "Hello World"; break;
        case "es": document.querySelector("h1").textContent= "Hola Mundo"; break;
        case "de": document.querySelector("h1").textContent= "Hallo Welt"; break;
        default: userLang(); 
        }
    }

    userLang();