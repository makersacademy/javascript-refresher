var selectElementsStartingWithA = function(array) {
  return array.filter(function(word){
    return word[0].toLowerCase() === 'a';
  });
};

var selectElementsStartingWithVowel = function(array) {
  return array.filter(function(word){
    return word.toLowerCase().match(/^[aeiou]/);
  });
};

var removeNullElements = function(array) {
  return array.filter(function(element){
    return element !== null;
  });
};

var removeNullAndFalseElements = function(array) {
  return array.filter(function(element){
    return (element !== null && element !== false);
  });
};

var reverseWordsInArray = function(array) {
  return array.map(function(word) {
    return word.split('').reverse().join('');
  });
};

var everyPossiblePair = function(ary1) {
  var ary2 = [];
  ary1.forEach(function(value, index){
    ary2.push([ary1[index], (index === (ary1.length-1) ? ary1[0] : ary1[index+1]) ].sort());
  });
  return ary2.sort();
};

var allElementsExceptFirstThree = function(array) {
  var array2 = [];
    array.forEach(function(value, index){
    if (array[index] > 3) array2.push(value);
  });
  return array2;
};

var addElementToBeginning = function(array, element) {
  array.reverse().push(element);
  return array.reverse();
};

var sortByLastLetter = function(array) {
  array.sort(function(str1, str2){
    return str1[str1.length-1] > str2[str2.length-1];
  });
  return array;
};

var getFirstHalf = function(string) {
  var halfLength = Math.ceil(string.length / 2);
  return string.slice(0, halfLength);
};

var makeNegative = function(number) {
  return -Math.abs(number);
};

var numberOfPalindromes = function(array) {
  var pals = [];
  array.forEach(function(word){
    if (word === word.split('').reverse().join(''))
    pals.push(word);
  });
  return pals.length;
};

var shortestWord = function(array) {
  var shortest = array.sort(function(str1, str2){
    return str1.length - str2.length;
  })[0];
    return shortest;
  };

var longestWord = function(array) {
  var longest = array.sort(function(str1, str2){
    return str2.length - str1.length;
  })[0];
  return longest;
};

var sumNumbers = function(array) {
  var sum = 0;
  array.forEach(function(element){
    sum += element;
  });
  return sum;
};

var repeatElements = function(array) {
  var aryDbl = array;
  array.forEach(function(element){
    aryDbl.push(element);
  });
  return aryDbl;
};

var stringToNumber = function(string) {
  return parseInt(string);
};

var calculateAverage = function(array) {
  var sum = 0;
  array.forEach(function(element){
    sum += element;
  });
  return sum / array.length;
};

var getElementsUntilGreaterThanFive = function(array) {
  var ary2 = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] >= 6) {break;}
    ary2.push(array[i]);
  }
  return ary2;
};

var convertArrayToObject = function(array) {
  var obj = {};
  for (var i = 0; i < array.length; i = i + 2) {
  obj[array[i]] = array[i+1];
  }
  return obj;
};

var getAllLetters = function(array) {
  var noDup = [];
  array.forEach(function(string) {
  if (noDup.includes(string) === false)
    noDup.push(string);
});
  var sorted = [];
  noDup.forEach(function(string){
    sorted.push(string.split(''));
  });
  return sorted.join().split(',').sort();
};

var swapKeysAndValues = function(object) {
  var result = {};
  for (var key in object) {
    // var resultKey = object[key]; //gets the vaule
    // var resultValue = key; // get the key
    // //asign key to value of the result
    // result[resultKey] = resultValue;
    result[object[key]] = key;
  }
  return result;
};

var sumKeysAndValues = function(object) {
  var sum = 0;
  for (var key in object) {
    sum += object[key];
    sum += parseInt(key);
  }
  return sum;
};

var removeCapitals = function(string) {
  var downCase =  string.toLowerCase().split('');
  var splitStr =  string.split('');
  var result = [];

  for (var i = 0 ; i < splitStr.length ; i++) {
    if (splitStr[i] === downCase[i])
    result.push(splitStr[i]);
  }
  return result.join('');
};

var roundUp = function(number) {
  return Math.ceil(number);
};

var formatDateNicely = function(date) {
  var day = date.getDate();
  if (day < 10) day = "0"+day;
  var month = date.getMonth()+1;
  if (month < 10) month = "0"+month;
  var year = date.getFullYear();
  return day+"/"+(month)+"/"+year;
};

var getDomainName = function(string) {
  var domain = string.split('@')[1];
  return domain.replace('.com','');
};

var titleize = function(string) {
  return capAfterFullStops(titleCase(string));
};

var titleCase = function(string) {
  var ary = [];
  string.split(' ').forEach(function(txt){
    txt.length > 3 ? ary.push(capitalizeString(txt)) : ary.push(txt);
  });
  return ary.join(' ');
};

var capAfterFullStops = function(string){
   var result = string.split('. ').map(function(subString) {
     return (capitalizeString(subString));
   });
   return result.join('. ');
 };

var capitalizeString = function(string) {
  return string[0].toUpperCase()+string.slice(1);
};

var checkForSpecialCharacters = function(string) {
  var result = string.match(/\W/g) !== null;
  return result;
};

var squareRoot = function(number) {
  return Math.sqrt(number);
};

var factorial = function(number) {
  var sum = number;
  for (var i = number-1; i > 0; i--) {
    sum *= i;
  }
  return sum;
};

var findAnagrams = function(string) {
  var ary = string.split('');
  var resultAry = [];
  ary.forEach(function(letter){
    remainder = ary.filter(function(element){
      return element != letter ;
    });
    resultAry.push(letter+remainder.join(''),letter+(remainder.reverse()).join(''));
  });
  return resultAry.sort();
};

var convertToCelsius = function(number) {
  return Math.ceil((number - 32) * 0.555);
};

var letterPosition = function(array) {
  return array.map(function(element){
    return alphaIndex(element);
  });
};

var alphaIndex = function(letter) {
  var alphabet = "_abcdefghijklmnopqrstuvwxyz";
  return alphabet.indexOf(letter.toLowerCase());
};
