//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//Example
//highAndLow("1 2 3 4 5"); return "5 1"
//highAndLow("1 2 -3 4 5"); return "5 -3"
//highAndLow("1 9 3 4 -5"); return "9 -5"


//My Answer
function highAndLow(numbers) {
  var arrayOfNumber = numbers.split(" ")
  var max = Math.max.apply(null, arrayOfNumber)
  var min = Math.min.apply(null, arrayOfNumber)
  console.log(max + " " + min)
}

highAndLow('1 2 3')
//return "3 1"