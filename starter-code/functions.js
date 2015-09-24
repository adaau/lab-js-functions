// Question 1
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
        return x;
    }
    else if (y > x) {
        return y;
    }
    else {
        return null;
    }
}

// Question 2
function maxOfThree(x, y, z) {
    return Math.max(x, y, z);
}

// Question 3
var vowels = ["a", "e", "i", "o", "u"];

function isCharacterAVowel(x) {
    var ind = vowels.indexOf(x);
    if (ind >= 0) {
        return true;
    }
    else {
        return false;
    }
}

// Question 4
function sumArray(array) {
    for (var i = 0, sum = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// Question 4
function multiplyArray(array) {
    for (var i = 0, product = 1; i < array.length; i++) {
        product *= array[i];
    }
    return product;
}


// Question 5
var numberOfArguments = function(){
	return arguments.length;  
}

// Question 6
function reverseString(string) {
    var reverseArray = [];
    for (var i = 1; i <= string.length; i++) {
        reverseArray.push(string.charAt(string.length - i));   
    }    
        var reverseWord = reverseArray.join("");
        return reverseWord;
}

// Question 7
function findLongestWord(array) {
    for (var i = 0, longest = 0; i < array.length; i++) {
        if (array[i].length > longest) {
            longest = array[i].length;
            longestWord = array[i];
        }
    }  
    return longestWord;
}

// Question 8
var newArray = [];
function filterLongWords(array, i) {
    for (var x = 0; x < array.length; x++) {
        if (array[x].length > i) {
            newArray.push(array[x]);
        }
    }
    return newArray;
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

