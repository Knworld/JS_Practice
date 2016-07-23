function binaryAgent(str) {
  var binArr = str.split(' ');
  var decimal = [128, 64, 32, 16, 8, 4, 2, 1];
  var conversTable = {65:'A', 66:'B', 67:'C', 68:'D', 69:'E', 70:'F', 71:'G', 72:'H', 73:'I', 74:'J', 75:'K', 76:'L', 77:'M', 78:'N', 79:'O', 80:'P', 81:'Q', 82:'R', 83:'S', 84:'T', 85:'U', 86:'V', 87:'W', 88:'X', 89:'Y', 90:'Z',
                      97:'a', 98:'b', 99:'c', 100:'d', 101:'e', 102:'f', 103:'g', 104:'h', 105:'i', 106:'j', 107:'k', 108:'l', 109:'m', 110:'n', 111:'o', 112:'p', 113:'q', 114:'r', 115:'s', 116:'t', 117:'u', 118:'v', 119:'w',120:'x', 121:'y', 122:'z',
                      63:'?', 46:'.', 39:"'", 32:' ', 33:'!', 34:'"'}
  
   for(var i=0; i<binArr.length; i++){
      binArr[i] = binArr[i].split('');
    }
  

  
   for(var a=0; a<binArr.length; a++){
     
     for(var j=0; j<binArr[a].length; j++){
       binArr[a][j] = Number(binArr[a][j])*decimal[j];  
     }
   }
  
  for(var b=0; b<binArr.length; b++){
      
     binArr[b] = binArr[b].reduce(function(previousVal, nextVal){
      return previousVal+nextVal;
    });
  }
  
  for(var c=0; c<binArr.length; c++){
      binArr[c] = conversTable[binArr[c]];
  }
  console.log(binArr);
  
  return binArr.join('');
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));