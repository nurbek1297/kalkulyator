const userInput = document.querySelector('.user-input');
const buttons = document.querySelectorAll('button');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            currentInput = '';
            userInput.textContent = '0';
        } else if (value === 'DEL') {
            currentInput = currentInput.slice(0, -1);
            userInput.textContent = currentInput || '0';
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
                userInput.textContent = currentInput;
            } catch {
                userInput.textContent = 'Error';
                currentInput = '';
            }
        } else {
            currentInput += value;
            userInput.textContent = currentInput;
        }
    });
});
