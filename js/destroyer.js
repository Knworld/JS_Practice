function destroyer(arr) {
  // Remove all the values
 // console.log(arr);
  //console.log(arguments);
  var sheeps = arr;
  var targets = [];
  
  for(var i=1; i<arguments.length; i++){
      targets.push(arguments[i]);
  }
  
  return sheeps.filter(function(val){
    if(targets.indexOf(val)>-1){
        return false;
      }
    
    return true;
  });
  
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));