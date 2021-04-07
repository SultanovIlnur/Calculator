var num1 = 0;
var num2 = 0;
var currentNumber = 1;
var operationType = "+";
function calculate(pressedSymbol){
    currentNumber = 2;
    num1 = parseInt(document.getElementById("textInput").value);
    document.getElementById("textInput").value = "";
    operationType = pressedSymbol;
}
function equal(){
    currentNumber = 1;
    num2 = parseInt(document.getElementById("textInput").value);
    var math_op = {
        '/': function (x, y) { return x / y },
        '*': function (x, y) { return x * y },
        '+': function (x, y) { return x + y },
        '-': function (x, y) { return x - y }
        
    }
    let result = math_op[operationType](num1, num2);
    if (result.length > 8){
        document.getElementById("textInput").value = "ERR";
    }
    else{
        document.getElementById("textInput").value = result;
    }
    
}
function clear(){
if (currentNumber == 1){
    num1 = 0;
}
else{
num2 = 0;
}
}
function clearAll(){
    num1 = 0;
    num2 = 0;
    document.getElementById("textInput").value = "";
}
function digit(pressedDigit){
    if (document.getElementById("textInput").value.length <=8){
        document.getElementById("textInput").value += pressedDigit;
    }
    
}