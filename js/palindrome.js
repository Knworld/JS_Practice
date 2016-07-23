function palindrome(str) {
  // Good luck!
  str = str.toLowerCase();
  
  //select all characters that are non-alphanumeric and remove them
  str = str.replace(/[^a-zA-Z0-9]*/g,'');
  
  
  return (str.search(reverseStr(str)) == -1) ? false:true ;
}

function reverseStr(str){
  var myArr;
  myArr = str.split('');
  myArr = myArr.reverse();
  
  console.log(myArr.reduce(function(previousVal, currentVal){return previousVal+currentVal}));
  
  return myArr.reduce(function(previousVal, currentVal){return previousVal+currentVal})
  
}


console.log(palindrome("1 eye for of 1 eye."));
