const display = document.getElementById("display");

function applendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        const res = eval(display.value);
        display.value = res;
    } catch {
        display.value = "error"
    }
}