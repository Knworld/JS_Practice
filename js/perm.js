function permAlone(str) {
  var pat = /^([a-zA-Z])\1+$/;
  var testArr = pat.exec(str);
  var matchLen = (testArr !== null) ? testArr[0].length : 0;
  //console.log('len ' + matchLen);
  var permArr = [];
  
  if(matchLen == str.length)
    return 0;
  else {
    return checkPerm(perms(str,''));
  }
  
  
  
  function perms(str, fixed) {
  var strCopy = str.split('');
  var selected;
  var fixedGroup;
  
  if (strCopy.length === 0) {
      permArr.push(fixed);
  }
  
  for (var i = 0; i < strCopy.length; i++) {
    selected = strCopy.splice(i, 1);
    fixedGroup = fixed + selected;
    console.log('fixed ' + fixedGroup);
    console.log('remain ' + strCopy);
    perms(strCopy.join(''), fixedGroup);
    strCopy = str.split('');

  }
  return permArr;
}


}

function checkPerm(perm){
    console.log(perm);
    var repNum=0;
    for(var i=0; i<perm.length; i++){
        var pat = /([a-zA-Z])\1+/;
        if(pat.test(perm[i]))
            repNum++;
    }
    
    return perm.length-repNum;
}

permAlone('abc');
