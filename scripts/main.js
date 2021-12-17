/* --------------------Variables-------------------- */
let displayValue = 0;
const display = document.getElementById("display");


/* ---------------------Script---------------------- */
console.log(operate(divide, 40, 8));
console.log(displayValue);
document.onload = function () {
    display.textContent = displayValue;
    console.log(display.textContent)
}

/* ---------------------Buttons--------------------- */
document.getElementById("clearButton").onclick = function () {
    clear();
    refresh();
}


/* --------------------Functions-------------------- */



// add function
function sum(a, b) {
    return a + b;
};

//subtract function
function subtract(a, b) {
    return a - b;
};

//multiply function
function multiply(a,b) {
    return a*b;
};

//divide function
function divide(a,b) {
    return a/b;
};

//operate / equals button function
function operate(operator, a, b) {
    displayValue = operator(a,b);
    refresh();
    return operator(a,b);
}

//clear function
function clear() {
    displayValue=0;
}

function refresh() {
    display.textContent = displayValue;
}