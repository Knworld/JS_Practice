function telephoneCheck(str) {
  var format1 = /^1{0,1}\({1}[0-9]{3}\){1}[0-9]{3}-[0-9]{4}$/;
  var format2 = /^1{0,1}[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  var format3 = /^1{0,1}[0-9]{10}$/;

  str = str.replace(/\s/g, '');
  console.log('test2 ' + str);
  
  return (format1.test(str) || format2.test(str) || format3.test(str));
  
  
}



telephoneCheck("1 (555) 555-5555");