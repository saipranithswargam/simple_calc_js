function calculator(num1 ,num2 ,operator){
    return operator(num1 ,num2);
}
function add(num1 ,num2){
    return (Number(num1) + Number(num2));
}
function multiply(num1 ,num2){
    return num1 * num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function divide(num1 , num2) {
    return num1/num2;
}
function remainder(num1 ,num2){
    return num1%num2;
}
num1=prompt("Enter first number " );
num2=prompt("Enter Second number ");
operation=prompt("enter the operation u need to perform(+,*,-,/,%)");
var result=0;
if(operation==="+"){
    result=calculator(num1,num2,add);
}
else if(operation==="*"){
    result=calculator(num1,num2,multiply);
}
else if(operation==="-"){
    result=calculator(num1,num2,subtract);
}
else if(operation==="/"){
    result=calculator(num1,num2,divide);
}
else if (operation==="%"){
    result=calculator(num1,num2,remainder);
}
alert("result of operation is: "+result);
