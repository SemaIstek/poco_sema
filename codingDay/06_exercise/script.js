function weekNumbersToWords(numbers) {
    const weekdays = [];
  
    for (const number of numbers) {
      let day;
      switch (number) {
        case 1:
          day = "Sunday";
          break;
        case 2:
          day = "Monday";
          break;
        case 3:
          day = "Tuesday";
          break;
        case 4:
          day = "Wednesday";
          break;
        case 5:
          day = "Thursday";
          break;
        case 6:
          day = "Friday";
          break;
        case 7:
          day = "Saturday";
          break;
        default:
          day = "Invalid Day";
      }
      weekdays.push(day);
    }
  
    return weekdays;
  }
  
  const inputArray = [2, 4, 5, 7];
  const result = weekNumbersToWords(inputArray);
  console.log(result); 
  