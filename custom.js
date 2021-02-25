//user input
let num1= prompt("Enter Your 1st Number");
let num2= prompt("Enter Your 2nd Number");

//User input convert into number
//float = show int and float

num1 = parseFloat(num1);
num2 = parseFloat(num2);

//anywhere useing this is writtin(let result;)

let result;

//Addition
result = num1 + num2;

document.write("Addition: " + num1 + " + " + num2 + "=" + result + "<br>");

//Subtraction
result = num1 - num2;
document.write("Subtraction: " + num1 + " - " + num2 + "=" + result + "<br>");

//Multipication
result = num1 * num2;
document.write("Multipication: " + num1 + " * " + num2 + "=" + result + "<br>");

//Divition
result = num1 / num2;
document.write("Divition: " + num1 + " / " + num2 + "=" + result + "<br>" + "<br>");

let point = Math.random()*10;
point =Math.round(point);
document.write("You Got" + " " + point  +" " +  "For Using Calculator");