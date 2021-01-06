let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');
const journal = document.getElementById('journal');

// кнопка сброса
document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';// ставим 0 для отображения 0 после нажатия на сброс
})

document.querySelector('#btn_0').addEventListener('click', function () {
    if (inputWindow.value == "0") {// такое же условие для сброса 0, добавлено чтобы при нажатии не было много нолей
        inputWindow.value = "";
    }
    inputWindow.value += '0';
});

document.querySelector('#btn_1').addEventListener('click', function () {
    if (inputWindow.value == "0") {// добавляем условие, при нажатии, чтобы сбрасывался 0
        inputWindow.value = "";
    }
    inputWindow.value += '1';
});

document.querySelector('#btn_2').addEventListener('click', function () {
    if (inputWindow.value == "0") {
        inputWindow.value = "";
    }
    inputWindow.value += '2';
});

document.querySelector('#btn_3').addEventListener('click', function () {
    if (inputWindow.value == "0") {
        inputWindow.value = "";
    }
    inputWindow.value += '3';
});

document.querySelector('#btn_4').addEventListener('click', function () {
    if (inputWindow.value == "0") {
        inputWindow.value = "";
    }
    inputWindow.value += '4';
});

document.querySelector('#btn_5').addEventListener('click', function () {
    if (inputWindow.value == "0") {
        inputWindow.value = "";
    }
    inputWindow.value += '5';
});

document.querySelector('#btn_6').addEventListener('click', function () {
    if (inputWindow.value == "0") {
        inputWindow.value = "";
    }
    inputWindow.value += '6';
});

document.querySelector('#btn_7').addEventListener('click', function () {
    if (inputWindow.value == "0") {
        inputWindow.value = "";
    }
    inputWindow.value += '7';
});

document.querySelector('#btn_8').addEventListener('click', function () {
    if (inputWindow.value == "0") {
        inputWindow.value = "";
    }
    inputWindow.value += '8';
});

document.querySelector('#btn_9').addEventListener('click', function () {
    if (inputWindow.value == "0") {
        inputWindow.value = "";
    }
    inputWindow.value += '9';
});

// вещественное число
document.querySelector('#btn_realnumb').addEventListener('click', function () {
    inputWindow.value = inputWindow.value + '.';
});

// унарный минус
document.querySelector('#btn_unarminus').addEventListener('click', function () {
    inputWindow.value = -inputWindow.value;
});

// сумма
document.querySelector('#btn_sum').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
});

// минус
document.querySelector('#btn_minus').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'minus';
    inputWindow.value = '';
});

// умножение
document.querySelector('#btn_multiplication').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'multiplication';
    inputWindow.value = '';
});

// деление
document.querySelector('#btn_division').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'division';
    inputWindow.value = '';
});

//квадратный корень
document.querySelector('#btn_sqr').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sqr';
    //inputWindow.value = '';
    const result = Math.sqrt(parseFloat(inputWindow.value));// !сразу при нажатии производить вычесление корня без дополнительно нажатия равно
    const resultJournal = "√" + parseFloat(inputWindow.value);
    operation = null;
    lastOperand = 0;
    inputWindow.value = result;
    journal.value += ' \u{279C} ' + resultJournal + "=" + result;
});

//равно
document.querySelector('#btn_calc').addEventListener('click', function () {
    if (operation === 'sum') {
        const result = lastOperand + parseFloat(inputWindow.value);// ! везде parsFloat чтобы не округлял значения
        const resultJournal = lastOperand + "+" + parseFloat(inputWindow.value);// записываем переменную для журнала
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
        journal.value += ' \u{279C} ' + resultJournal + "=" + result;// выводим в журнал с перносом на новую строку
    }

    if (operation === 'minus') {
        const result = lastOperand - parseFloat(inputWindow.value);
        const resultJournal = lastOperand + "-" + parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
        journal.value += ' \u{279C} ' + resultJournal + "=" + result;
    }

    if (operation === 'multiplication') {
        const result = lastOperand * parseFloat(inputWindow.value);
        const resultJournal = lastOperand + "*" + parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
        journal.value += ' \u{279C} ' + resultJournal + "=" + result;
    }

    /*
    if (val == 0 && operation == "/") {
        alert('Нельзя делить на 0');
        return false;
    }
    */

    if (operation === 'division') {
        const result = lastOperand / parseFloat(inputWindow.value);
        const resultJournal = lastOperand + "/" + parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
        journal.value += ' \u{279C} ' + resultJournal + "=" + result;
    }

    /*  if (operation === 'sqr') {
          const result = Math.sqrt(parseFloat(inputWindow.value));
          operation = null;
          lastOperand = 0;
          inputWindow.value = result;
    */
})