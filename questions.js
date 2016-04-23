var result;

var selectElementsStartingWithA = function(array) {
  return array.filter(_startsWithA);
}

function _startsWithA(value){
  return value.toLowerCase().startsWith('a');
}

var selectElementsStartingWithVowel = function(array) {
  return array.filter(_startsWithVowel);
}

function _startsWithVowel(item){
  var arrVowels =['a','e','i','o','u'];
  return arrVowels.some(function(vowel) {
    return item.toLowerCase().slice(0,1) == vowel;
  }) ;
}

var removeNullElements = function(array) {
  return array.filter(_notNull);
}

function _notNull(item){
  return item != null;
}

var removeNullAndFalseElements = function(array) {
  return array.filter(_notFalseNotNull);
}

function _notFalseNotNull(item){
  return _notFalse(item) &&  _notNull(item);
}

function _notFalse(item){
  return (typeof item == 'boolean' ? item : true);
}

var reverseWordsInArray = function(array) {
  return array.map(function(item){
    return _reverseString(item);
  });
}

function _reverseString(string) {
  return string.split('').reverse().join('');
}

var everyPossiblePair = function(array) {
  result = [];
  array.forEach(function(outerItem, outerIndex){
    array.forEach(function(innerItem, innerIndex){
      if(innerIndex > outerIndex){
        result.push([innerItem, outerItem].sort());
      }
    })
  })
  return result.sort();
}

var allElementsExceptFirstThree = function(array) {
  return array.slice(3);
}

var addElementToBeginning = function(array, element) {
  array.reverse().push(element)
  return array.reverse();
}

var sortByLastLetter = function(array) {
  return _reverseElements(_reverseElements(array).sort());
}

function _reverseElements(array) {
  return array.map(function(item){
    return _reverseString(item);
  })
}

var getFirstHalf = function(string) {
  return string.slice(0, Math.ceil((string.length / 2)) );
}

var makeNegative = function(number) {
  return Math.abs(number) * -1;
}

var numberOfPalindromes = function(array) {
  result = 0;
  array.forEach(function(item){
    if(item == _reverseString(item)){ result += 1; }
  });
  return result;
}

var shortestWord = function(array) {
  var shortPos = 0;
  var shortLength = 99;
  array.forEach(function(item, index){
    if(item.length < shortLength){
      shortPos = index;
      shortLength = item.length;
    }
  });
  return array[shortPos];
}

var longestWord = function(array) {
  var temp='';
  array.forEach(function(item, index){
    if(item.length > temp.length){ temp = item;}
  });
  return temp;
}

var sumNumbers = function(array) {
  return _getArrayTotal(array);
}

function _getArrayTotal(array){
  return array.reduce(function(total,item){
    return total + item;
  });
}

var repeatElements = function(array) {
  return array.concat(array);
}

var stringToNumber = function(string) {
  return Number(string);
}

var calculateAverage = function(array) {
  return _getArrayTotal(array) / array.length;
}

var getElementsUntilGreaterThanFive = function(array) {
  return array.slice(0,array.findIndex(function(item){
    return item > 5;
  }));
}

var convertArrayToObject = function(array) {
  result={};
  var key;
  array.forEach(function(item, index){
    (index % 2 == 0) ? key = item : result[key] = item;
  });
  return result;
}

var getAllLetters = function(array) {
  return array.join('').split('').filter(_onlyUnique).sort()
}

function _onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

var swapKeysAndValues = function(object) {
  result={};
  for (var prop in object){
    result[object[prop]] = prop;
  }
  return result;
}

var sumKeysAndValues = function(object) {
  result=0;
  for (var prop in object){
    result += (Number([object[prop]]) + Number(prop));
  }
  return result;
}

var removeCapitals = function(string) {
  return string.replace(/[A-Z]/g,'');
}

var roundUp = function(number) {
  return Math.ceil(number);
}

var formatDateNicely = function(date) {
  var d = new Date(date);
  return d.toLocaleDateString("en-gb");
}

var getDomainName = function(string) {
  var emailAry = string.split('@');
  var domainAry = emailAry[1].split('.');
  return domainAry.slice(0,-1).join('.');
}

var titleize = function(string) {
  var words = string.split(' ');
  var sentences = _capitalizeWithExceptions(words).join(' ').split('.')
  return sentences.map(_capitalizeFirstLetter).join('. ');
}

function _capitalizeWithExceptions(words){
  var exceptions =['the','and'];
  return words.map(function(word){
    return (exceptions.indexOf(word) == -1 ? _capitalizeFirstLetter(word) : word );
  });
};

function _capitalizeFirstLetter(text){
  var trimText = text.trim();
  return trimText.slice(0,1).toUpperCase() + trimText.slice(1);
}

var checkForSpecialCharacters = function(string) {
  return string.match(/\W/g) != null;
}

var squareRoot = function(number) {
  return Math.sqrt(number);
}

var factorial = function(number) {
  var result = 1;
  for(var i=2; i<=number; i ++){
    result *= i;
  }
  return result;
}

// Heap's algorithm: https://en.wikipedia.org/wiki/Heap%27s_algorithm
var findAnagrams = function(string) {
  result = [];
  letters = string.split('');
  permute(letters.length, letters);
  return result.sort();
}

function permute(n, array){
  if (n == 1){
    result.push(array.join(''));
  } else {
    for (var i = 0; i < n - 1; i += 1){
      permute(n - 1, array);
      if (n%2 == 0 ){
        _swapArrayElements(array, i, n-1);
      } else {
        _swapArrayElements(array, 0, n-1);
      }
    }
    permute(n - 1, array);
  }
}

function _swapArrayElements(array, i, j){
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
}

var convertToCelsius = function(number) {
  return Math.round((number - 32) * (5/9));
}

var letterPosition = function(array) {
  var CHAR_CODE_FOR_A = 97
  return array.map(function(item){
    return item.toLowerCase().charCodeAt(0) - CHAR_CODE_FOR_A + 1;
  })
}
