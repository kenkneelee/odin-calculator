/* --------------------Variables-------------------- */
let displayValue = 0;
let inputValue = [];
let currentOperator = "none";
let a = [];
let b = [];
const display = document.getElementById("display");
let equaled = true;


/* ---------------------Script---------------------- */
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
        if (inputValue.length < 11) {
            inputValue.push(element.id);
            displayValue = Number(inputValue.join(''));
            refresh();
        }
    })
});

// Operator buttons
const operators = [...document.getElementsByClassName("operatorButton")];
operators.forEach(element => {
    element.addEventListener("click", function () {
        if (equaled == false) {
            b = displayValue;
            operate(currentOperator, a, b);
            inputValue = displayValue.toString().split("");
        }
        a = displayValue;
        displayValue = 0;
        refresh();
        inputValue = [];
        currentOperator = element.id;
        equaled = false;
    })
})

// Equals button
const equals = document.getElementById("equals");
equals.addEventListener("click", function () {
    if (equaled == false) {
        b = displayValue;
        operate(currentOperator, a, b);
        inputValue = displayValue.toString().split("");
        equaled = true;
    }
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
function exponent(a, b) {
    return a ** b;
};

//operate / equals button function
function operate(operator, a, b) {
    displayValue = +(+window[operator](a, b).toFixed(10)).toPrecision(11);
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

//refresh display with current value
function refresh() {
    display.textContent = displayValue;
}