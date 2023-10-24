function reverseNumber(number) {
    const reversed = parseInt(number.toString().split('').reverse().join(''));
    return reversed;
  }
  
  const originalNumber = 123456;
  const reversedNumber = reverseNumber(originalNumber);
  console.log(reversedNumber); 
  