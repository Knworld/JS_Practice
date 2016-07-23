function sym(args) {
 var tempArr = [];
  
  for(var x=0; x<arguments.length; x++){
    
     tempArr.push(arguments[x].reduce(function(a,b){
      
      if(a===b)
        return a;
      else{
        if(a[a.length-1] === b)
          return a;
        else if(typeof a == 'object')
          return a.concat(b);
        else
          return [a,b];
      } 
      
    }));
    
  }
  
  tempArr = tempArr.reduce(function(a,b){
    //console.log('test ' + a + ' ' + b);
    for(var i=0; i<a.length; i++){
      for(var j=0; j<b.length; j++){
        if(a[i] == b[j]){
          a.splice(i,1);
          b.splice(j,1);
          i--;
          j--;
          break;
        }
      }
      
    }
    
   
    return a.concat(b);
  
  });
  
 return tempArr;
}
function sym(args) {
 var tempArr = [];
  
  for(var x=0; x<arguments.length; x++){
    
     tempArr.push(arguments[x].reduce(function(a,b){
      
      if(a===b)
        return a;
      else{
        if(a[a.length-1] === b)
          return a;
        else if(typeof a == 'object')
          return a.concat(b);
        else
          return [a,b];
      } 
      
    }));
    
  }
  
  tempArr = tempArr.reduce(function(a,b){
    //console.log('test ' + a + ' ' + b);
    for(var i=0; i<a.length; i++){
      for(var j=0; j<b.length; j++){
        if(a[i] == b[j]){
          a.splice(i,1);
          b.splice(j,1);
          i--;
          j--;
          break;
        }
      }
      
    }
    
   
    return a.concat(b);
  
  });
  
 return tempArr;
}
