let number = "";
let storedNumber = "";
let operator = "";
let screenTextNode;

window.onload = () => {
    screenTextNode = document.getElementById("screen-text");
    updateScreen();
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
    updateScreen();
    
}

function removeNumber()
{
    number = number.substring(0, number.length - 1);
    updateScreen();
}


function operatorPressed(op)
{
    operator = op;
    if(storedNumber) {
        storedNumber = doOp(storedNumber, operator, number);
    } else {
        storedNumber = number;
    }
    
    operator = op;
    number = "";
    updateScreen();
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
            screenTextNode = "INVALID OPERATOR"
    }
    
    return 0;
}

function reset()
{
    number = "";
    storedNumber = "";
    operator = "";
    updateScreen();
}

function updateScreen()
{
    if(number)
    {
        screenTextNode.innerText = number;
    }
    else
    {
        screenTextNode.innerText = "0";
    }
}
