///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum(x, y){
	var z = x + y
	return z;
}

var z = sum(2, 5);

console.log(z);


// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg(x, y, z){
	var result = (x + y + z) / 3
    return result;
}

var result = avg(2, 3, 4);

console.log(result);


// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength(myString){
    var result = myString.length;
    return result;
}

var result = getLength("Lindsey can javascript a little");

console.log(result);


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

function poop(x, y) {
  if(x > y) {
    return false;
  } else if(y > x) {
    return true;
  }

  return result;
}

var result = poop(2, 3);

console.log(result);



// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function greet(name) {
	var result = "Hello, " + name + "!";
    return result;
}

var result = greet("Lindsey");

console.log(result);

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

function madlib(w, x, y, z) {
    var result = "The " + w + " man " + x + " running " + y + " the " + z;
    return result;
}

var result = madlib("nice", "is", "to", "dungeon");

console.log(result);

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////