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
  return string.substr(0, Math.round(string.length / 2));
};

var makeNegative = function(number) {
  return -Math.abs(number);
};

var numberOfPalindromes = function(array) {
  var reversed = [];
  var counter = 0;
  array.forEach(function(element){
    reversed.push(element.split('').reverse().join(''));
  });

  for(var i=0; i < array.length; i++){
    if(array[i] === reversed[i]){
      counter++;
    }
  }
  return counter;
};

var shortestWord = function(array) {
  var shortest = array.sort(function (a, b) { return a.length - b.length; })[0];
  return shortest;
};

var longestWord = function(array) {
  var longest = array.sort(function (a, b) { return b.length - a.length; })[0];
  return longest;
};

var sumNumbers = function(array) {
  var sum = array.reduce(function(a, b) {
    return a + b;
  });
  return sum;
};

var repeatElements = function(array) {
  array.forEach(function(element){
    array.push(element);
  });
  return array;
};

var stringToNumber = function(string) {
  return parseInt(string);
};

var calculateAverage = function(array) {
  var sum = array.reduce(function(a, b) {
    return a + b;
  });
  return sum / array.length;
};

var getElementsUntilGreaterThanFive = function(array) {
  return array.splice(0,6);
};

var convertArrayToObject = function(array) {
  result = {};
  for (var i=0; i < array.length -1; i++) {
    result[array[i]] = array[i+1];
    i++;
  }
  return result;
};

var getAllLetters = function(array) {
  var allLetters = [];
  array.forEach(function(element){
    for(var i=0; i<element.length; i++){
      if(allLetters.indexOf(element[i]) === -1){
        allLetters.push(element[i]);
      }
    }
  });
  return allLetters.sort();
};

var swapKeysAndValues = function(object) {
  var result = {};
  for (var key in object) {
    result[object[key]] = key;
  }
  return result;
};

var sumKeysAndValues = function(object) {
  var result = 0;
  for (var key in object) {
    result += parseInt(object[key]) + parseInt(key);
  }
  return result;
};

var removeCapitals = function(string) {

};

var roundUp = function(number) {
  return Math.ceil(number);
};

var formatDateNicely = function(date) {

};

var getDomainName = function(string) {

};

var titleize = function(string) {

};

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
};

var squareRoot = function(number) {
  return Math.sqrt(number);
};

var factorial = function(number) {
  var result=1;
    for (var i = 2; i <= number; i++){
      result *= i;
    }
    return result;
};

var findAnagrams = function(string) {
  return 'Write your method here';
};

var convertToCelsius = function(number) {
  return Math.round(((number - 32) * (5/9)));
};

var letterPosition = function(array) {
  return 'Write your method here';
};
