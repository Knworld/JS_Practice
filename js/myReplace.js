var vowel = ['a', 'e', 'i', 'o', 'u'];

function translate(str) {
  var strArr;
  var endWord = '';
  var index;
  if(vowel.indexOf(str[0])>-1)
    return str+'way';
  else{
     strArr = str.split('');
     
     for(var i=0; i<strArr.length; i++){
       if(vowel.indexOf(strArr[i])<0){
         endWord += strArr[i];
       }else break;
     } 
    console.log(endWord);
     
     strArr = strArr.slice(endWord.length);
     endWord += 'ay';
     strArr.push(endWord);
     strArr = strArr.join('');
  }
  
  console.log(strArr);
  return strArr;
}

translate("consonant");
