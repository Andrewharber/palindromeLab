function isPalindrome(word) {
  let palindrome = word.toLowerCase()
  let reverse = palindrome.split('').reverse().join('');   
  return (palindrome == reverse)  
}
  
/* 
  Add your pseudocode here
assign variable to word.toLowerCase()
assign variable to apply chain of split() reverse() join() to palindrome variable
compare 
return */

/*
  Add written explanation of your solution here
  assignment to palindrome variable to hold value of word
  assignment to reverse variable to hold value of word reversed
  then return is using equality operator to verify word is a palindrome returning a boolean value
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
