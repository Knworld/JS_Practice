function friendly(arr) {
  
  var start = arr[0].split('-');
  var end = arr[1].split('-');
  
  var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemeber', 'December'];
  var ordinal = ['st', 'nd', 'rd', 'th'];
  
  var startMonth;
  var startDay;
  var startYear;
  var endMonth;
  var endDay;
  var endYear;
  var startResult;
  var endResult;
  
  var resultArr = [];
  var timeDif = new Date(end[0], end[1], end[2]) - new Date(start[0], start[1], start[2]);
  var miliYear = 31536000000;

  console.log(timeDif, miliYear);
  start[1] = convert(start[1], 1);
  start[2] = convert(start[2], 2);
  end[1] = convert(end[1],1);
  end[2] = convert(end[2],2);
  
 
  
  function convert(value, index){
    value = Number(value);
    
    if(index == 1)
      return month[value-1];
    else{
      if(value>3)
        return value+ordinal[3];
      else
        return value+ordinal[value-1];
    }
    
    
  }
  
  function format(){
    

    if(timeDif< miliYear){
      
      if(start[0] == new Date().getFullYear()){
        startYear = '';
        endYear = '';
        if(start[1] == end[1]){
          startMonth = start[1] + ' ';
          endMonth = '';
        }else{
          startMonth = start[1] + ' ';
          endMonth = end[1] + ' ';
        }
      }
      else if(start[0] == end[0]){
        startYear = ', ' + start[0];
        endYear = '';
        startMonth = start[1] + ' ';
        endMonth = end[1] + ' ';
      }else{
        startYear = ', ' + start[0];
        endYear = '';
        startMonth = start[1] + ' ';
        endMonth = end[1] + ' ';
      }
    }
    else{
      startYear = ', ' + start[0];
      endYear = ', ' + end[0];
      
     
      startMonth = start[1] + ' ';
      endMonth = end[1] + ' ';
      
    }
    
    
      
    startResult = startMonth + start[2] + startYear;
    endResult = endMonth + end[2] + endYear;
    
    
    if(timeDif <= 0)
      return [start[1]+' ' + start[2] + ', ' + start[0]];
    else
      return [startResult, endResult];
  
  }
  
   return format();
}

friendly(["2018-01-13", "2018-01-13"]);
