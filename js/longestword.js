function findLongestWord(str) {
  var newArr;
  newArr = str.split(' ');
  newArr = newArr.map(function(val){
    return val.length
  })
  
  newArr = newArr.sort(function(a,b){
    return b-a;
  })
  
  return newArr[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog");