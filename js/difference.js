function diff(arr1, arr2) {
  
  var newArr = [];
  
  function filterArr1(val){
    
    var str = arr2.join();
    console.log(str);
    return (str.indexOf(val) == -1);
  }
  
  function filterArr2(val){
    var str = arr1.join();
    console.log('filter2 ' + str + 'val ' + val);
    return (str.indexOf(val) == -1);
  }
  
    newArr = newArr.concat(arr1.filter(filterArr1));
    newArr = newArr.concat(arr2.filter(filterArr2));
  
  console.log(arr2.filter(filterArr2));
  console.log(newArr);
  // Same, same; but different.
  return newArr;
  
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(Array('20'));