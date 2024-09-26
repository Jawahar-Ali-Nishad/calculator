
const display = document.getElementById('display');

function updateDisplay(value) {
    display.value += value;
}

document.getElementById('ac').addEventListener('click', () => {
    display.value = '';
});

document.getElementById('de').addEventListener('click', () => {
    display.value = display.value.toString().slice(0, -1);
});

document.getElementById('dot').addEventListener('click', () => updateDisplay('.'));
document.getElementById('divide').addEventListener('click', () => updateDisplay('/'));
document.getElementById('seven').addEventListener('click', () => updateDisplay('7'));
document.getElementById('eight').addEventListener('click', () => updateDisplay('8'));
document.getElementById('nine').addEventListener('click', () => updateDisplay('9'));
document.getElementById('multiply').addEventListener('click', () => updateDisplay('*'));
document.getElementById('four').addEventListener('click', () => updateDisplay('4'));
document.getElementById('five').addEventListener('click', () => updateDisplay('5'));
document.getElementById('six').addEventListener('click', () => updateDisplay('6'));
document.getElementById('subtract').addEventListener('click', () => updateDisplay('-'));
document.getElementById('one').addEventListener('click', () => updateDisplay('1'));
document.getElementById('two').addEventListener('click', () => updateDisplay('2'));
document.getElementById('three').addEventListener('click', () => updateDisplay('3'));
document.getElementById('add').addEventListener('click', () => updateDisplay('+'));
document.getElementById('double-zero').addEventListener('click', () => updateDisplay('00'));
document.getElementById('zero').addEventListener('click', () => updateDisplay('0'));

document.getElementById('equal').addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
});
