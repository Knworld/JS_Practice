function palindrome(str) {
  // Good luck!
  str = str.toLowerCase();
  str = str.replace(/\s+/g,'');
  
  return (str.search(reverseStr(str) == -1) ? false:true );
}

function reverseStr(str){
  var myArr;
  myArr = str.split('');
  myArr = myArr.reverse();
  
  console.log(myArr.reduce(function(previousVal, currentVal){return previousVal+currentVal}));
  
  return myArr.reduce(function(previousVal, currentVal){return previousVal+currentVal})
  
}


console.log(palindrome("not a palindrome"));
