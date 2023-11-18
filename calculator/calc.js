let display = document.getElementById('display');
let currentInput = '';

function calculate(event) {
    let buttonClicked = event.target.textContent;

    if (buttonClicked === 'C') {
        currentInput = '';
    } else if (buttonClicked === '=') {
        try {
            currentInput = eval(currentInput).toString();
        } catch (error) {
            currentInput = 'Error';
        }
    } else {
        currentInput += buttonClicked;
    }

    display.textContent = currentInput;
}
