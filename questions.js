var selectElementsStartingWithA = function(array) {
  var result = [];
  array.forEach(function(element){
    if(element.charAt(0) == 'a'){
      result.push(element);
    }
  });
  return result;
};

var selectElementsStartingWithVowel = function(array) {
  var result = [];
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  array.forEach(function(element){
    if(vowels.indexOf(element.charAt(0)) !== -1){
      result.push(element);
    }
  });
  return result;
};

var removeNullElements = function(array) {
  var result = [];
  array.forEach(function(element){
    if(element !== null){
      result.push(element);
    }
  });
  return result;
};

var removeNullAndFalseElements = function(array) {
  var result = [];
  array.forEach(function(element){
    if(element !== null && element !== false){
      result.push(element);
    }
  });
  return result;
};

var reverseWordsInArray = function(array) {
  var result = [];
  array.forEach(function(element){
    result.push(element.split('').reverse().join(''));
  });
  return result;
};

var everyPossiblePair = function(array) {
	pending;
};

var allElementsExceptFirstThree = function(array) {
  array.splice(0,3);
  return array;
};

var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
};

var sortByLastLetter = function(array) {
  var reversed = [];
  var result = [];
  array.forEach(function(element){
    reversed.push(element.split('').reverse().join(''));
  });

  reversed.sort();

  reversed.forEach(function(element){
    result.push(element.split('').reverse().join(''));
  });
  return result;
};

var getFirstHalf = function(string) {
  return 'Write your method here';
};

var makeNegative = function(number) {
  return 'Write your method here';
};

var numberOfPalindromes = function(array) {
  return 'Write your method here';
};

var shortestWord = function(array) {
  return 'Write your method here';
};

var longestWord = function(array) {
  return 'Write your method here';
};

var sumNumbers = function(array) {
  return 'Write your method here';
};

var repeatElements = function(array) {
  return 'Write your method here';
};

var stringToNumber = function(string) {
  return 'Write your method here';
};

var calculateAverage = function(array) {
  return 'Write your method here';
};

var getElementsUntilGreaterThanFive = function(array) {
  return 'Write your method here';
};

var convertArrayToObject = function(array) {
  return 'Write your method here';
};

var getAllLetters = function(array) {
  return 'Write your method here';
};

var swapKeysAndValues = function(object) {
  return 'Write your method here';
};

var sumKeysAndValues = function(object) {
  return 'Write your method here';
};

var removeCapitals = function(string) {
  return 'Write your method here';
};

var roundUp = function(number) {
  return 'Write your method here';
};

var formatDateNicely = function(date) {
  return 'Write your method here';
};

var getDomainName = function(string) {
  return 'Write your method here';
};

var titleize = function(string) {
  return 'Write your method here';
};

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
};

var squareRoot = function(number) {
  return 'Write your method here';
};

var factorial = function(number) {
  return 'Write your method here';
};

var findAnagrams = function(string) {
  return 'Write your method here';
};

var convertToCelsius = function(number) {
  return 'Write your method here';
};

var letterPosition = function(array) {
  return 'Write your method here';
};
