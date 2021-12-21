/* --------------------Variables-------------------- */
let displayValue = 0;
let inputValue = [];
let currentOperator = "none";
let a = [];
let b = [];
const display = document.getElementById("display");


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

//operate / equals button function
function operate(operator, a, b) {
    displayValue = operator(a, b);
    refresh();
    return operator(a, b);

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