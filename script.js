let display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.textContent = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || '0';
}

function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
    display.textContent = currentInput;
}

function appendOperator(op) {
    if (currentInput === '' && previousInput === '') return;
    if (currentInput === '') {
        operator = op;
        return;
    }
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result;
    operator = '';
    previousInput = '';
    display.textContent = result;
}
