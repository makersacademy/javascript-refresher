var selectElementsStartingWithA = function(array) {
  output = []
  array.forEach(pickA);
  function pickA(value){
    if (value.charAt(0) === 'a') {
      output.push(value);
    }
  }
  return output;
}

var selectElementsStartingWithVowel = function(array) {
  output = []
  array.forEach(pickA);
  function pickA(value){
    checkItem = value.charAt(0)
    if (/[aeiou]/.test(checkItem)) {
      output.push(value);
    }
  }
  return output;
}

var removeNullElements = function(array) {
  var output = array.filter(function (element)  {
    return element != null;
  });
  return output;
}

var removeNullAndFalseElements = function(array) {
  var output = []
  array.forEach(element);
  function element(value) {
    if (value === 0) {
      output.push(value);
      return
    }
    if (value != null && value != false) {
      output.push(value);
    }
  }
  return output;
}

var reverseWordsInArray = function(array) {
  return 'Write your method here';
}

var everyPossiblePair = function(array) {
  return 'Write your method here';
}

var allElementsExceptFirstThree = function(array) {
  return 'Write your method here';
}

var addElementToBeginning = function(array, element) {
  return 'Write your method here';
}

var sortByLastLetter = function(array) {
  return 'Write your method here';
}

var getFirstHalf = function(string) {
  return 'Write your method here';
}

var makeNegative = function(number) {
  return 'Write your method here';
}

var numberOfPalindromes = function(array) {
  return 'Write your method here';
}

var shortestWord = function(array) {
  return 'Write your method here';
}

var longestWord = function(array) {
  return 'Write your method here';
}

var sumNumbers = function(array) {
  return 'Write your method here';
}

var repeatElements = function(array) {
  return 'Write your method here';
}

var stringToNumber = function(string) {
  return 'Write your method here';
}

var calculateAverage = function(array) {
  return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
  return 'Write your method here';
}

var convertArrayToObject = function(array) {
  return 'Write your method here';
}

var getAllLetters = function(array) {
  return 'Write your method here';
}

var swapKeysAndValues = function(object) {
  return 'Write your method here';
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return 'Write your method here';
}

var roundUp = function(number) {
  return 'Write your method here';
}

var formatDateNicely = function(date) {
  return 'Write your method here';
}

var getDomainName = function(string) {
  return 'Write your method here';
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
