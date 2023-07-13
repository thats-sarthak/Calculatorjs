let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleButtonClick(e.target.innerHTML);
    });
});

document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (isNumeric(key) || isOperator(key)) {
        handleButtonClick(key);
    } else if (key === '=' || key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLastCharacter();
    }
});

function handleButtonClick(value) {
    if (isNumeric(value) || isOperator(value)) {
        string += value;
        input.value = string;
    } else if (value === '=') {
        calculateResult();
    } else if (value === 'AC') {
        clearInput();
    } else if (value === 'DEL') {
        deleteLastCharacter();
    }
}

function calculateResult() {
    try {
        string = eval(string);
        input.value = string;
    } catch (error) {
        string = 'error';
        input.value = string;
    }
}

function clearInput() {
    string = "";
    input.value = string;
}

function deleteLastCharacter() {
    string = string.substring(0, string.length - 1);
    input.value = string;
}

function isNumeric(value) {
    return /^\d+$/.test(value);
}

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}
