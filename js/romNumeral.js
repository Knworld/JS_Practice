var onesList = {'0':'', '1':'I', '2':'II', '3':'III', '4':'IV', '5':'V', '6':'VI', '7':'VII', '8':'VIII', '9':'IX'};
var tensList = {'0':'','1':'X', '2':'XX', '3':'XXX', '4':'XL', '5':'L', '6':'LX', '7':'LXX', '8':'LXXX', '9':'XC'};
var hundredsList = {'0':'','1':'C', '2':'CC', '3':'CCC', '4':'CD', '5':'D', '6':'DC', '7':'DCC', '8':'DCCC', '9':'CM'};
var thousandsList = {'1':'M'};
var listArr = [onesList, tensList, hundredsList];


function convert(num) {
  var strNum = String(num);
  var hundreds = [];
  var thousands = [];

  if(strNum.length>3){
    hundreds = strNum.slice(-3).split('');
    hundreds = hundreds.reverse();
    console.log(hundreds);
    thousands = Array(strNum.slice(0, strNum.length-3));
  }else{
    hundreds = strNum.split('').reverse();
    console.log(hundreds);
  }
 
  for(var i=0; i< hundreds.length; i++){
    hundreds[i] = listArr[i][hundreds[i]];
  }
  
  if(thousands.length !== 0){
    var len = Number(thousands[0]);
    thousands[0]='';
    for(var j=0; j<len; j++){
      thousands[0]+= 'M';
    }
  }
  
  console.log((thousands.concat(hundreds.reverse())).join(''));
  
  
 return (thousands.concat(hundreds.reverse())).join('');
}

convert(3050);
