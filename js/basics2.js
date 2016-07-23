/*
function pow(x,n){
	var absN = Math.abs(n);
	var isNeg = n < 0 ? true : false;
	var origX = x;
	if(n == 0) return 1;
	if(n == -1) return 1/x;
	
	if(isNeg) origX = x = 1/x;
	
	while(absN>1){
		x *= origX;	
		absN--;
		//console.log('test '+ absN + ', ' + x);
	}
	
	return x;
}

var x = prompt('enter x value: ');
var n = prompt('enter power');

console.log(pow(x,n));
*/

function evaluateExpression(num1, num2, op){
	
	return eval(num1 + op + num2);
	
}

console.log(evaluateExpression(1,2,'/'));