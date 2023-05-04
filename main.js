//DOM Selectors
const nums = document.querySelectorAll('.num');
const operator = document.querySelectorAll('.op');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const floatPoint = document.querySelector('.dot');
const buttons = document.querySelectorAll('button')

const result = document.querySelector('.result');

let isFloat = false;
let firstCalc = true;

let num1 = 0;
let num2 = 0;
let operation = '';

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a / b;
}

function operate(a,b,operation) {
    switch(operation) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            alert('error');
            return;
    }
}



nums.forEach(num=>{
    num.addEventListener('click',(e)=>{
        
        if (operation == '' && firstCalc){
            num1 += e.target.textContent;
            result.textContent += e.target.textContent;
        }else if(operation != ''){
            num2 += e.target.textContent;
            result.textContent += e.target.textContent;
        }
    })
})

operator.forEach(op=>{
    op.addEventListener('click',(e)=>{
        if (isFloat){
            num1 = parseFloat(num1);
        }else {
            num1 = parseInt(num1);
        }
        if(operation!=''){
            if(isFloat){
                num2 = parseFloat(num2);
            }else{
                num2 = parseInt(num2);
            }
            num1 = operate(num1,num2,operation);
            num2 = 0;
            result.textContent = num1 + e.target.textContent;
            operation = e.target.textContent;

        }else{
            operation = e.target.textContent;
            result.textContent += operation;
        }
        isFloat = false;
    })
})

equals.addEventListener('click',()=>{
    if (num1!=0 && num2!=0 && operation!=''){
        if (isFloat){
            num2 = parseFloat(num2);
        }else {
            num2 = parseInt(num2);
        }
        isFloat = false;
        let fResult = operate(num1,num2,operation);
        result.textContent = fResult;
        num1 = fResult;
        num2 = 0
        operation = ''
        firstCalc = false;
    }
})

clear.addEventListener('click',()=>{
    /* result.textContent = '';
    num1 = 0;
    num2 = 0; */
    location.reload();
})

floatPoint.addEventListener('click',()=>{
    if(operation == ''){
        num1 += '.';
    }else{
        num2 += '.';
    }
    result.textContent += '.';
    isFloat = true;
})


buttons.forEach(b=>{
    b.addEventListener('click',()=>{
        console.log('num1: '+num1+'\nnum2: '+num2+'\nop: '+operation)
    })
})



