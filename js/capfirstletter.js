function titleCase(str) {
  var newArr = str.toLowerCase().split(' ');
  
  for(var i=0; i<newArr.length;i++){
    newArr[i] = newArr[i].replace(/^\w/, newArr[i].match(/^\w/)[0].toUpperCase());
  }
  
  
  return newArr.join(' ');
}

console.log(titleCase("I'm a little tea pot"));