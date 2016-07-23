function largestOfFour(arr) {
  // You can do this!
  console.log(Boolean(""))
  var resultArr = [];
  for(var i=0; i<arr.length; i++){
    arr[i] = arr[i].sort(function(a,b){return b-a;});
    resultArr.push(arr[i][0]);
    
  }
  return resultArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
