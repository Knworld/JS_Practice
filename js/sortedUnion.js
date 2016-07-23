function unite(arr1, arr2, arr3) {
  var resultArr=[];
  
  for(var i=0; i<arguments.length; i++){
    checkValues(arguments[i], false);
  }
  
  function checkValues(val, isInnerArray){
    for(var i=0; i<val.length; i++){
      if(typeof val[i] != 'array'){
        
        if(resultArr.indexOf(val[i])<0){
          if(isInnerArray){
            resultArr.push([val[i]]);
          }else{
            resultArr.push(val[i]);
          }
            
        }
      }else{
        checkValues(val[i]);
      }
    }
  }
  
  return resultArr;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
