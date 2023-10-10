let day = prompt("Enter a day: "); 
let upperCaseDay = day.toUpperCase(); 

switch (upperCaseDay) {
    case "MONDAY":
        console.log("Montag");
        break;
    case "TUESDAY":
        console.log("Dienstag");
        break;
    case "WEDNESDAY":
        console.log("Mittwoch");
        break;
    case "THURSDAY":
        console.log("Donnerstag");
        break;
    case "Friday":
        console.log("Freitag");
        break;
    case "SATURDAY":
        console.log("Samstag");
        break;
    case "Sunday":
        console.log("Sonntag");
        break;
    default:
        console.log("Invalid value"); 
        break;
}

