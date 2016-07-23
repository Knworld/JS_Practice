var oddFibSum1 = 1;

function sumFibsRe(checkNum, currentNum, nextNum) {
    
   
    if(checkNum == 0 || checkNum == 1){
        if(checkNum == 1)
          oddFibSum1 = 2;
        return oddFibSum1;
    }
    
    if(typeof currentNum === 'undefined') currentNum = 0;
       
    if(typeof nextNum === 'undefined') nextNum = 1;   
 
    
    var currentSum = currentNum + nextNum;
    
    
    
    if(currentSum>checkNum){
       return oddFibSum1;
    }else if(currentSum == checkNum){
       if(isOdd(currentSum)) oddFibSum1+=currentSum;
       return oddFibSum1;
    }else{
      if(isOdd(currentSum)) oddFibSum1+=currentSum;
      
      return sumFibsRe(checkNum, nextNum, currentSum); 
    }
    
    console.log('test ' +oddFibSum1);
    
    //return oddFibSum;
}


function isOdd(num){
    if( num%2 !=0)
      return true;
    else
      return false;
 }

//console.log(sumFibsRe(1000));



function sumFibs(num) {
  var oddFibSum = 1, numArr = [];

   if(num === 0)
        return 0;
    else if( num == 1)
        return 2;
  
     if(numArr.length === 0){
          numArr.push(0);
          numArr.push(1);
        }
          
    while(numArr[numArr.length-1]<=num){
        
        numArr.push(numArr[numArr.length-2] + numArr[numArr.length-1]);
      
          if(numArr[numArr.length-1]>num){
            break;
          }
          else if(numArr[numArr.length-1]==num){
            if(numArr[numArr.length-1]%2 !== 0)
              oddFibSum+=numArr[numArr.length-1];

            break;
          }else{
            if(numArr[numArr.length-1]%2 !== 0)
              oddFibSum+=numArr[numArr.length-1];
            
            
          }
              
   }
    
  return oddFibSum;
}


 function gcd(a, b) {
        //console.log('b ' + b + ' ' + !b);
        return !b ? a : gcd(b, a % b);
    }


function gcd2(a, b){
    
    var min = Math.min(a,b);
    var max = Math.max(a,b);
    
    var gcd;
    
    while(true){
        
        if(max%min == 0){
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

console.log('test2 ' + gcd2(4,8));
console.log('test1 ' + gcd(4,8));
sumFibs(75024);




