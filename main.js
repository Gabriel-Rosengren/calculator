let number = "";
let storedNumber = "";
let operator = "";
let screenTextNode;

window.onload = () => {
    screenTextNode = document.getElementById("screen-text");
    updateScreen(number);
}

function addNumber(num)
{
    if(!number)
    {
        if(num != 0)
        {
            number = num.toString();
            firstNumber = false;
        } 
    }
    else
    {
        number = number + num;
    }
    updateScreen(number);
    
}

function removeNumber()
{
    number = number.substring(0, number.length - 1);
    updateScreen(number);
}

function operatorPressed(op)
{
    
    if(storedNumber) {
        storedNumber = doOp(storedNumber, operator, number);
        operator = op;
        number = "";
        updateScreen(storedNumber);

    } else {
        operator = op;
        storedNumber = number;
        number = "";
        updateScreen(storedNumber);
    }
    
    
}

function doOp(num1, op, num2)
{
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    switch(op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        case "%":
            return num1 % num2;
        default:
            screenTextNode.innerText = "INVALID OPERATOR"
    }
    
    return 0;
}

function reset()
{
    number = "";
    storedNumber = "";
    operator = "";
    updateScreen(number);
}

function updateScreen(text)
{
    if(!text)
    {
        screenTextNode.innerText = "0"; 
    }
    else
    {
        screenTextNode.innerText = text;
    } 
}

function doEquation()
{
    if(!storedNumber)
    {
        storedNumber = number;
        number = "";
    }
    else
    {
        number = doOp(storedNumber, operator, number)
        storedNumber = ""
        updateScreen(number);
    }

}

function negate()
{
    if(number)
    {
        if(number[0] == "-")
        {
            number = number.substring(1)
        }
        else
        {
            number = "-" + number;
        }
        updateScreen(number);
    }
}
