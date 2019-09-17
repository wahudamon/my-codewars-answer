//You are going to be given a word.
//Your job is to return the middle character of the word.
//If the word is odd, return the middle character.
//If the word's length is even, return the middle 2 characters.

// Example :
//getMiddle("test") should return "es"
//getMiddle("tesing") should return "t"
//getMiddle("middle") should return "dd"
//getMiddle("A") should return "A"

//My Answer
function getMiddle(s) {
  var pos;
  var length;

  if(s.length % 2 == 1) {
    pos = s.length / 2;
    length = 1;
  } else {
    pos = s.length / 2 - 1;
    length = 2;
  }

  return s.substring(pos, pos + length);
}

console.log(getMiddle("middle"));