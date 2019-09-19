//Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

//Rules for a smilling face:
// - Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// - A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// - Every smilling face  must have a smiling mouth that should be marked with either ) or D.
//No additional characters are allowed except for those mentioned.

//Valid smiley face examples:
//:) :D ;-D :~)

//Invalid smiley faces:
//;( :> :} :]

//Example cases:
// countSmileys([':)', ';(', ';}', ':-D']); should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']); should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); should return 1;

// note:
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same

// My answer

//Not using Regular Expression
function countSmileys(arr) {
  var correctSmileys = [':)', ':D', ':-)', ':-D', ':~)', ':~D', ';)', ';D', ';-)', ';-D', ';~)', ';~D'];
  var finalArray = [];
  arr.forEach((i1) => correctSmileys.forEach((i2) => {
    if(i1 === i2) {
      finalArray.push(i1);
    }
  }));

  return finalArray.length;
}

//using Regular Expression
function countSmileysUsingRegex(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}