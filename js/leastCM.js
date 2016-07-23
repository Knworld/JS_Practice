function smallestCommons(arr) {
  
  if(arr[0]== arr[1])
    return undefined;
  
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  var primeFactTotal = 1;
  
  var rangeArr = [];
  
  for(var i=min; i<=max; i++){
    
    rangeArr.push(i);
  }
  
  
  for(var j=0; j<rangeArr.length; j++){
    
    primeFactTotal = getLCM(rangeArr[j], primeFactTotal);
  }
  
  function getLCM(x,y){
    
    return (x*y)/getGCD(x,y);
  }
  
  function getGCD(x,y){
    
    var min = Math.min(x,y);
    var max = Math.max(x,y);
    
    var gcd;
    
    while(true){
        
        if(max%min === 0){
            gcd = min;
            break;
        }else{
            gcd = max%min;
      
            max = min;
            min = gcd;
        }
        
    }
    
    return gcd; 
    
  }
  
  
  
  return primeFactTotal;
}


smallestCommons([1,5]);
