// the array to be sorted
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// temporary array holds objects with position and sort-value
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// sorting the mapped array containing the reduced values
mapped.sort(function(a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});

// container for the resulting order
var result = mapped.map(function(el){
  return list[el.index];
});

//console.log(result);

//var test = 'ABCDZ?'
//console.log(test.charCodeAt(4));


function drop(arr, func) {
  // Drop them elements.
  
  while(!func(arr[0])){
  
    if(arr.length>0)
        arr.shift();
    else
        return [];
    
    
   
  }
  
  return arr;
}

//console.log(drop([1, 2, 3, 4], function(n) {return n >= 3; }));

var saveArr = [], remainingArr = [];


/*
function breakArr(thisElement, remainingArr){
    var testElement;
    //console.log(thisElement.length);
    if(thisElement.length == 1){
        if(typeof thisElement[0] !== 'object'){
            saveArr.push(thisElement[0]);
           if(remainingArr.length == 0)
            return saveArr; 
        }else{
            return breakArr(thisElement[0], thisElement[0]);
        }
    } 
   else if(thisElement.length > 1){
       if(typeof thisElement[0] !== 'object'){
        
        saveArr.push(thisElement.shift());
        testElement =  thisElement;
        remainingArr = thisElement;
        return  breakArr(testElement, remainingArr); 
       }else {              
         testElement = thisElement.shift();
         remainingArr = thisElement;
         return breakArr(testElement, remainingArr);
       }
         
    }
     
     
    return saveArr;
     
    
       
 }
 
*/
  
function breakArr(thisElement){
    
    for (var i=0; i<thisElement.length; i++){
        console.log('type : ' + typeof thisElement[i]);
        if(typeof thisElement[i] !== 'object'){
            saveArr.push(thisElement[i]);
        }else{
            //console.log('what is this ? ' + thisElement[i].length);
            if(thisElement[i].length == undefined){
                //console.log('this object');
                saveArr.push(thisElement[i]);
            }
            else
                breakArr(thisElement[i]);
        }
    }
    
    return saveArr;
}  
  

//console.log('test value ' + breakArr([1, {}, [3, [[4]]]]));
console.log(10 && 1);

