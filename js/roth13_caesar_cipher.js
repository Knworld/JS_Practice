function rot13(str) { // LBH QVQ VG!
  var alphabetTable = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 
  
  var tempArr = str.split('');
  var decodedArr = [];
  
  for(var i=0; i<tempArr.length; i++){
      var index = alphabetTable.indexOf(tempArr[i]);
      if(index >-1){
        index = index -13;
        index = index<0 ? 25+index+1 : index;
        decodedArr.push(alphabetTable[index]);
      }
      else
        decodedArr.push(tempArr[i]);
  }
  
  return decodedArr.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

function rot13_method2(str){
    
    var newStr = '';
    var charCode;
    for(var i=0; i<str.length; i++){
       charCode = str.charCodeAt(i);
       if(charCode >= 65 && charCode <= 90){
           charCode = charCode-13;
           if(charCode<65){
               charCode = 90-(64-charCode);
              
           }
           newStr+= String.fromCharCode(charCode);
               
       }else{
           newStr+= str[i];
       }
         
    }
    
    return newStr;
    
}

console.log(rot13_method2("SERR YBIR?"));
