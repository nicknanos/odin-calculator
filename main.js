//DOM Selectors
const nums = document.querySelectorAll('.num');
const operator = document.querySelectorAll('.op');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

const result = document.querySelector('.result');


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
        console.log(e.target.textContent)
        if (operation == ''){
            num1 += e.target.textContent;
        }else {
            num2 += e.target.textContent;
        }
    })
})

operator.forEach(op=>{
    op.addEventListener('click',(e)=>{
        console.log(e.target.textContent)
        operation = e.target.textContent;
    })
})

equals.addEventListener('click',()=>{
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    result.textContent = operate(num1,num2,operation);
    num1 = 0
    num2 = 0
    operation = ''
})

clear.addEventListener('click',()=>{
    result.textContent = '';
})








