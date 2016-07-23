
function drawer(price, cash, cid) {
  var change = cash-price;
  var cashAvail = 0;
  var changeArr = [];
  var arrLen = cid.length;

  
  for(var i=0; i<arrLen; i++){
    cashAvail += cid[i][1];
    
  }
  
  console.log(cashAvail);
  
  function processChange(){
    change = Number(change.toFixed(2));
    if(change>=100 && cid[8][1] >= 100){
      
        change -= 100;
        cid[8][1] -= 100;
        if(changeArr.length === 0 || changeArr[changeArr.length-1][0] != 'ONE HUNDRED')
          changeArr.push(['ONE HUNDRED', 100]);
        else
          changeArr[changeArr.length-1][1]+= 100;
          
       
      
    }
    else if(change>=20 && cid[7][1] >= 20 ){
       
        console.log(change.toFixed(2));
        change -= 20;
        cid[7][1] -= 20;
        if(changeArr.length === 0 || changeArr[changeArr.length-1][0] != 'TWENTY')
          changeArr.push(['TWENTY', 20]);
        else
          changeArr[changeArr.length-1][1]+= 20;
             

      
    }else if(change>=10 && cid[6][1] >= 10){
     
        change -= 10;
        cid[6][1] -= 10;
        if(changeArr.length === 0 || changeArr[changeArr.length-1][0] != 'TEN')
          changeArr.push(['TEN', 10]);
        else
          changeArr[changeArr.length-1][1]+= 10;
          
      

    }else if(change>=5 && cid[5][1] >= 5 ){
   
        change -= 5;
        cid[5][1] -= 5;
        if(changeArr.length === 0 || changeArr[changeArr.length-1][0] != 'FIVE')
          changeArr.push(['FIVE', 5]);
        else
          changeArr[changeArr.length-1][1]+= 5;
          
    

      
    }else if(change>=1 && cid[4][1] >= 1 ){
      
        change -= 1;
        cid[4][1] -= 1;
        if(changeArr.length === 0 || changeArr[changeArr.length-1][0] != 'ONE')
          changeArr.push(['ONE', 1]);
        else
          changeArr[changeArr.length-1][1]+= 1;

     

      
    }else if(change>=0.25 && cid[3][1] >= 0.25 ){
        
        change -= 0.25;
        cid[3][1] -= 0.25;
        if(changeArr.length == 0 || changeArr[changeArr.length-1][0] != 'QUARTER')
          changeArr.push(['QUARTER', 0.25]);
        else
          changeArr[changeArr.length-1][1]+= 0.25;
          

      
    }else if(change>=0.1 && cid[2][1] >= 0.1 ){
      
        change -= 0.1;
        cid[2][1] -= 0.1;
        if(changeArr.length === 0 || changeArr[changeArr.length-1][0] != 'DIME')
          changeArr.push(['DIME', 0.1]);
        else
          changeArr[changeArr.length-1][1]+= 0.1;
        
      
    }else if(change>=0.05 && cid[1][1] >= 0.05 ){
        change -= 0.05;
        cid[1][1] -= 0.05;
        if(changeArr.length === 0 || changeArr[changeArr.length-1][0] != 'NICKEL')
          changeArr.push(['NICKEL', 0.05]);
        else
          changeArr[changeArr.length-1][1]+= 0.05;
          
      
    }else if(change>=0.01 && cid[0][1] >= 0.01){
        console.log(change);
        change -= 0.01;
        cid[0][1] -= 0.01;
        if(changeArr.length === 0 || changeArr[changeArr.length-1][0] != 'PENNY')
          changeArr.push(['PENNY', 0.01]);
        else
          changeArr[changeArr.length-1][1]+= 0.01;
           

      
    }else {
      if (change>0)
        return 'Insufficient Funds';
      else return changeArr;
    }
      
    return processChange();
      
  }
  
  if(change == cashAvail)
    return 'Closed';
  else if(change > cashAvail)
    return 'Insufficient Funds';
  else 
    return processChange();
  
  // Here is your change, ma'am.
  
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

console.log(drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
