function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var indexArr = [];
  var strArr = str.split('');
  var capPattern = /[A-Z]/g;
 
  var match;
  
    str = str.replace(/_/g, ' ');
 
  if(str.indexOf(' ')>-1){
    str = str.replace(/\s/g, '-');
    //str = str.replace
    return str.toLowerCase();
  }else{
    
      while(match = capPattern.exec(str)){
       indexArr.push(match.index);
  }
  
  for(var i=0; i<indexArr.length; i++){
      strArr[indexArr[i]] = '-' + strArr[indexArr[i]]; 
   }
    
   return strArr.join('').toLowerCase();
    
  }
}

console.log(spinalCase('This Is Spinal Tap'));
