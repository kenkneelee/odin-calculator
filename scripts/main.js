/* --------------------Variables-------------------- */
let displayValue = 0;
let inputValue = [];
let currentOperator = "none";
let a = [];
let b = [];
const display = document.getElementById("display");
let equaled=false;


/* ---------------------Script---------------------- */
console.log(displayValue);
window.onload = function () {
    clear();
    refresh();
}

/* ---------------------Buttons--------------------- */
// Clear button
document.getElementById("clearButton").onclick = function () {
    clear();
    refresh();
}

// Backspace button
const backspace = document.getElementById("backspaceButton");
backspace.addEventListener(("click"), function () {
    inputValue.pop();
    displayValue = Number(inputValue.join(''));
    refresh();
});

// Numeric buttons
const numerics = [...document.getElementsByClassName("numberButton")];
numerics.forEach(element => {
    element.addEventListener("click", function () {
        inputValue.push(element.id);
        console.log(inputValue);
        displayValue = Number(inputValue.join(''));
        refresh();
    })
});

// Operator buttons
const operators = [...document.getElementsByClassName("operatorButton")];
operators.forEach(element => {
    element.addEventListener("click", function () {
        a = displayValue;
        displayValue = 0;
        refresh();
        console.log(a);
        inputValue = [];
        currentOperator = element.id;
        console.log(currentOperator);
    })
})

// Equals button
const equals = document.getElementById("equals");
equals.addEventListener("click", function () {
    b = displayValue;
    console.log(a + " " + currentOperator + " " + b);
    operate(currentOperator, a, b);
    inputValue=[displayValue];
    b = [];
});


/* --------------------Functions-------------------- */
// add function
function add(a, b) {
    return a + b;
};

//subtract function
function subtract(a, b) {
    return a - b;
};

//multiply function
function multiply(a, b) {
    return a * b;
};

//divide function
function divide(a, b) {
    return a / b;
};

//exponent function
function exponent(a,b) {
    return a**b;
};

//operate / equals button function
function operate(operator, a, b) {
    displayValue = window[operator](a, b);
    refresh();
    return window[operator](a, b);
}

//clear function
function clear() {
    a = [];
    b = [];
    inputValue = [];
    displayValue = 0;
    refresh();
}

function refresh() {
    display.textContent = displayValue;
}