function sayHello()
{
	alert("Welcome to Javascript World!");
}



function inputData()
{
	
	num1=parseInt(prompt("Enter First Number"));
	num2=parseInt(prompt("Enter Second Number"));

}

function add()
{
	inputData();
	sum=num1+num2;
	document.write("<br><h1>The sum is " + sum + "</h1>");
}

function sub()
{
	inputData();
	sub=num1-num2;
	document.write("<br><h1>The Subtraction is " + sub + "</h1>");
}



