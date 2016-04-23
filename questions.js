var reverseWord = function(string){
  return string.split("").reverse().join("");
};

var _palindrome = function(word){
  return word === reverseWord(word) ? true : false;
};


var selectElementsStartingWithA = function(array) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    if(array[i].toLowerCase().charAt(0) === "a") {
      results.push(array[i]);
    };
  };
  return results;
};


var selectElementsStartingWithVowel = function(array) {
  var vowels = ["a","e","i","o","u"];
  var results = [];
  for (var i = 0; i < array.length; i++) {
    if(vowels.indexOf(array[i].toLowerCase().charAt(0)) > -1) {
      results.push(array[i]);
    };
  };
  return results;
};

var removeNullElements = function(array) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    if(array[i] !== null) {
      results.push(array[i]);
    };
  };
  return results;
}

var removeNullAndFalseElements = function(array) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    if(array[i] || array[i] === 0) {
      results.push(array[i]);
    };
  };
  return results;
}

var reverseWordsInArray = function(array) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    var reversedWord = reverseWord(array[i]);
    results.push(reversedWord);
  };
  return results;
};

var everyPossiblePair = function(array) {
  var results = [];
  var array = array.sort()
  var duplicateArray = array.sort();
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < duplicateArray.length; j++){
      if(array[i] !== duplicateArray[j]) {
        var namesPair = [array[i],duplicateArray[j]].sort();
        results.push(namesPair);
        results.sort();
      };
    };
  };

  return results;
};

var allElementsExceptFirstThree = function(array) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    if(i > 2){
      results.push(array[i]);
    };
  };
  return results
};

var addElementToBeginning = function(array, element) {
  array.reverse();
  array.push(element);
  array.reverse();
  return array;
};

var sortByLastLetter = function(array) {
  var wrongWayArray = reverseWordsInArray(array);
  wrongWayArray.sort();
  var rightWayArray = reverseWordsInArray(wrongWayArray);
  return rightWayArray;
}

var getFirstHalf = function(string) {
  var length = string.length
  var newString = ""
  var stringArray = string.split("")
  for (var i = 0; i < length/2; i++) {
    newString+= stringArray[i];
  };
  return newString;
}



var makeNegative = function(number) {
   return number > 0 ? number * -1 : number;
};

var numberOfPalindromes = function(array) {
  var count = 0
  for (var i = 0; i < array.length; i++) {
    _palindrome(array[i]) ? count = count + 1 : count+=0;
  };
  return count;
};

var shortestWord = function(array) {
  var checker = 1000;
  var index = 0;
  var shortest = "";
  for (var i = 0; i < array.length; i++) {
    if(array[i].length < checker){
      checker = array.length;
      shortest = array[i];
    }
  }
  return shortest;
};

var longestWord = function(array) {
  var checker = 0;
  var index = 0;
  var longest = "";
  for (var i = 0; i < array.length; i++) {
    if(array[i].length > checker){
      checker = array.length;
      longest = array[i];
    }
  }
  return longest;
}

var sumNumbers = function(array) {
  var sum = 0
  array.map(function(x){
    sum+= x;
  });
  return sum;
}

var repeatElements = function(array) {
  return array.concat(array)
}

var stringToNumber = function(string) {
  return Number(string);
}

var calculateAverage = function(array) {
  return sumNumbers(array)/array.length;
}

var getElementsUntilGreaterThanFive = function(array) {
  var results =[];
  for (var i = 0; i < array.length; i++) {
    if(array[i] > 5){ break; }
    results.push(array[i]);
  };
  return results;
};

var convertArrayToObject = function(array) {
  var object = {};
  for (var i = 0; i < array.length; i+=2) {
    object[array[i]] = array[i+1];
  };
  return object;
};

var getAllLetters = function(array) {
  var lettersArray = [];
  for (var i = 0; i < array.length; i++) {
    lettersArray.push(array[i].split(""));
  };
  return [].concat.apply([],lettersArray).sort();
}

var swapKeysAndValues = function(object) {
  return 'Write your method here';
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  var newString = ""
  for (var i = 0; i < string.length; i++) {
    if(string.charAt(i) === " " || string.charAt(i) !== string.charAt(i).toUpperCase()){
      newString+= string.charAt(i);
    }
  }
  return newString;
};

var roundUp = function(number) {
  return number/1;
}

var doubleDigitDate = function(day){
  return day < 10 ? "0" + day : day
}

var formatDateNicely = function(date) {
  var dateString = "";
  var day = doubleDigitDate(date.getDate());
  var month = doubleDigitDate(date.getMonth() + 1);
  var year = date.getFullYear();

  dateString+= day + "/" + month + "/" + year;
  return dateString;
}

var getDomainName = function(string) {
  return string.substring((string.lastIndexOf("@")+1),(string.lastIndexOf(".com")));
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return 'Write your method here';
}

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
