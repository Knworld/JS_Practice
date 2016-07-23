function where(collection, source) {
  var arr = [];
  // What's in a name?
 var colKeys;
 var sourceKeys = Object.keys(source);
 
 //console.log(sourceKeys); 
  
  arr = collection.filter(function(val){
    
      colKeys = Object.keys(val);
      //console.log(colKeys); 
      if(colKeys.length<sourceKeys.length) return false;
      
      if(checkKeyMatch(colKeys, sourceKeys)) return checkValMatch(val, sourceKeys);
      else return false;
      
  })
  
  function checkKeyMatch(colKeys, sourceKeys){
    for (var i=0; i<sourceKeys.length; i++){
      
      if(colKeys.indexOf(sourceKeys[i])<0) return false;
    }
    
    return true;
  }
  
  function checkValMatch(col, sourceKeys){
      
      for (var i=0; i<sourceKeys.length; i++){
          
          if(col[sourceKeys[i]] != source[sourceKeys[i]])
            return false;
      }
      
      return true;
      
  }
  
  console.log(arr);
  return arr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
