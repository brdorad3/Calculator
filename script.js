let firstNum = '';
let operator = '';
let currentValue = '';
let result = '';
let dot=".";
const current = document.querySelector('.current');
const previous = document.querySelector('.previous');
const oper = document.querySelectorAll('.two');
const equals = document.querySelector('.twor');

const numbers = document.querySelectorAll('.one');
numbers.forEach((number) => number.addEventListener("click", function (e) {
    handleNumber(e.target.textContent);
    current.textContent = currentValue;
}))

const operators = document.querySelectorAll('.two');
operators.forEach((opButton) => opButton.addEventListener("click", function (e) {
    handleOperator(e.target.textContent);
}));

function handleOperator(op) {
    if (!currentValue) return;

    if (firstNum && operator && currentValue) {
        operate();
        firstNum = result;
        currentValue = '';
    } else if (!firstNum) {
        firstNum = currentValue;
        currentValue = '';
    }
    operator = op;
    previous.textContent = `${firstNum} ${operator}`;
}

function handleNumber(num) {
    currentValue += num;
}

equals.addEventListener("click", () => {
    if (!firstNum || !operator || !currentValue) return;
    previous.textContent = `${firstNum} ${operator} ${currentValue}`+" =";
 
    operate();
    if(result.includes(".")){
        result=parseFloat(result).toFixed(3);
    }
    console.log(result.length);
    current.textContent = result;
    firstNum = result;
    currentValue = '';
    operator = '';
        
});

function operate() {
    const num1 = parseFloat(firstNum);
    const num2 = parseFloat(currentValue);

    if (operator === '+') {
        result = (num1 + num2).toString();
    } else if (operator === '-') {
        result = (num1 - num2).toString();
    } else if (operator === '*') {
        result = (num1 * num2).toString();
    } else if (operator === '÷') {
        if(num2==0){alert("No No")}else{
        result = (num1 / num2).toString();}
    }
}

const clear = document.querySelector('.clear');
clear.addEventListener("click", () => {
    current.textContent = "";
    currentValue = "";
    firstNum = '';
    operator = '';
    previous.textContent = '';
});

const del = document.querySelector('.delete');
del.addEventListener("click", () => {
    currentValue = currentValue.slice(0, -1);
    current.textContent = currentValue;
});
