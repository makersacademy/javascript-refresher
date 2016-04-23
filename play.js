var reverseWord = function(string){
  return string.split("").reverse().join("");
};

var word = "12321";

var _palindrome = function(word){
  return word === reverseWord(word) ? true : false;
};

console.log(_palindrome(word));
