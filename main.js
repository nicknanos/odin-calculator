//DOM Selectors
const cKeys = document.querySelectorAll('.key');
const result = document.querySelector('.result');


let num1;
let num2;
let operation;

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

function isNumber(num){
    return parseInt(num) != NaN;
}


cKeys.forEach(key=>{
    key.addEventListener('click',(e)=>{
        let button  = e.target.value;
        if (a==null){
            
        }
    })
})








