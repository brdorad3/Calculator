let firstNum;
let operator;
let secondNum;
let currentValue="";
let previousValue="";
let ope;
const current=document.querySelector('.current');
const numop=document.querySelector('.numop');
const oper=document.querySelectorAll('.two');
const previous=document.querySelector('.previous');
const equals=document.querySelector('.twor');

const numbers=document.querySelectorAll('.one');
numbers.forEach((number)=>number.addEventListener("click",function(e){
handleNumber(e.target.textContent);
current.textContent=currentValue;
}))

const clear=document.querySelector('.clear');
clear.addEventListener("click", ()=>{
    current.textContent="";
    previous.textContent="";
    currentValue="";
    previousValue="";
   
})
/*
const del=document.querySelector('.delete');
clear.addEventListener("click", ()=>{
    current.innerHTML+="";
    previous.textContent=""
})
*/

const operators=document.querySelectorAll('.two');
operators.forEach((op)=>op.addEventListener("click",function(e){
    op==e.target.textContent;
   
handleOperator(e.target.textContent);
previous.textContent=previousValue+" "+" "+operator;
current.textContent=currentValue;
}))

function handleOperator(op){
    operator=op;
    previousValue=currentValue;
    currentValue="";
    
}

function handleNumber(num){
  currentValue+=num;
}

function add(a,b,){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

equals.addEventListener("click",()=>{
    operate();
    previous.textContent="";
    current.textContent=previousValue;
})

function operate(){
    currentValue=Number(currentValue);
    previousValue=Number(previousValue);

if(operator==='+'){
   previousValue+=currentValue;
}
else if(operator==='-'){
    previousValue-=currentValue;
}
    else if(operator==='*'){
        previousValue*=currentValue;
}
else if(operator==='/'){
    previousValue/=currentValue;
}

}
