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
  var output = []
  array.forEach(element);
  function element(value) {
    var valuesplit = value.split("")
    var splitreverse = valuesplit.reverse()
    var joinreverse = splitreverse.join("")
    output.push(joinreverse)
  }
  return output;
}

var everyPossiblePair = function(array) {
  var sortedArray = array.sort()
  var output = []
  var firstname = 0
  while (firstname < array.length) {
    for (iter = firstname + 1; iter < array.length; iter++) {
      output.push([sortedArray[firstname], sortedArray[iter]])
    }
    firstname += 1
  }
  return output;
}

var allElementsExceptFirstThree = function(array) {
  for (let iter = 0; iter < 3; iter++) {
    array.shift()
  }
  return array;
}

var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
}

var sortByLastLetter = function(array) {
  finished = 1
  while (finished > 0) {
    swaps = 0
    for (let iter = 0; iter < array.length-1; iter++) {
      let first = array[iter];
      let second = array[iter+1];
      if (second.charAt(second.length-1) < first.charAt(first.length-1)){
        array[iter] = second;
        array[iter+1] = first;
        swaps +=1
      }
    }
    if (swaps === 0) {
      finished = 0
    }
  }
  return array;
}

var getFirstHalf = function(string) {
  if (string.length % 2 === 0) {
    requiredchars = string.length / 2
  } else {
    requiredchars = (string.length / 2)+1
  }
  output = string.substr(0, requiredchars);
  return output;
}

var makeNegative = function(number) {
  output = number * -1
  return output;
}

var numberOfPalindromes = function(array) {
  output = 0
  array.forEach(checking);
  function checking (item) {
    var string = item
    if (string.length % 2 === 0) {
      requiredchars = string.length / 2
    } else {
      requiredchars = (string.length / 2)+1
    }
    firsthalf = string.substr(0, requiredchars)
    secondhalf = string.substr((string.length/2), requiredchars)
    var valuesplit = secondhalf.split("")
    var splitreverse = valuesplit.reverse()
    var joinreverse = splitreverse.join("")
    if (firsthalf === joinreverse) {
      output += 1
    }
  }
  return output;
}

var shortestWord = function(array) {
  shortestIndex = -1
  shortestLength = 99999
  array.forEach(shortest);
  function shortest(value, index) {
    if (value.length < shortestLength) {
      shortestLength = value.length;
      shortestIndex = index
    }
  }
  output = array[shortestIndex];
  return output;
}

var longestWord = function(array) {
  longestIndex = -1
  longestLength = 0
  array.forEach(longest);
  function longest(value, index) {
    if (value.length > longestLength) {
      longestLength = value.length;
      longestIndex = index
    }
  }
  output = array[longestIndex];
  return output;
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
