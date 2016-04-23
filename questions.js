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
  return array.map(_reverseString);
}

function _reverseString(string) {
  return string.split('').reverse().join('');
}

var everyPossiblePair = function(array) {
  return array.reduce(_arrayPair, []).sort();
}

function _arrayPair(result, element, index, array){
  for(var i=index+1; i<array.length; i++){
    result.push([element, array[i]].sort());
  }
  return result;
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
  return array.map(_reverseString);
}

var getFirstHalf = function(string) {
  return string.slice(0, Math.ceil((string.length / 2)) );
}

var makeNegative = function(number) {
  return Math.abs(number) * -1;
}

var numberOfPalindromes = function(array) {
  return array.filter(_isPalindrome).length;
}

function _isPalindrome(string){
  return string == _reverseString(string);
}

var shortestWord = function(array) {
  var result = array.reduce(_shortestWord, {pos: 0, length: 99});
  return array[result.pos];
}

function _shortestWord(result, item, index){
  return (item.length < result.length ? {pos: index, length: item.length} : result);
}

var longestWord = function(array) {
  return array.reduce(_longestWord, '');
}

function _longestWord(result, item){
  return (item.length > result.length ? item : result);
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
  var result = array.reduce(_convertToKeyValue, {prevKey: ''})
  delete result['prevKey'];
  return result;
}

function _convertToKeyValue(object, element, index){
  if (index % 2 == 0){
    object.prevKey = element;
    object[element] = '';
  } else {
    object[object.prevKey] = element;
  }
  return object;
}

var getAllLetters = function(array) {
  return array.join('').split('').filter(_onlyUnique).sort()
}

function _onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

var swapKeysAndValues = function(object) {
  var result={};
  for (var prop in object){
    result[object[prop]] = prop;
  }
  return result;
}

var sumKeysAndValues = function(object) {
  var result=0;
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
var result = [];

var findAnagrams = function(string) {
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
