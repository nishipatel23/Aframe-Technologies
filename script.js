let currentInput = '';
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    if (buttonText === '=') {
      calculate();
    } else if (buttonText === 'C') {
      clearDisplay();
    } else {
      currentInput += buttonText;
      updateDisplay();
    }
  });
});

function calculate() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    alert('Invalid input!');
    clearDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function updateDisplay() {
  display.value = currentInput;
}
