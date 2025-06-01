class Calculator {
    add(num1, num2) {
        /** Додає два числа. */
        return num1 + num2;
    }

    subtract(num1, num2) {
        /** Віднімає друге число від першого. */
        return num1 - num2;
    }

    multiply(num1, num2) {
        /** Множить два числа. */
        return num1 * num2;
    }

    divide(num1, num2) {
        /** Ділить перше число на друге. Обробляє ділення на нуль. */
        if (num2 === 0) {
            return "Помилка: Ділення на нуль неможливе.";
        }
        return num1 / num2;
    }
}

document.getElementById('calculateBtn').addEventListener('click', () => {
    const num1Input = document.getElementById('num1').value;
    const num2Input = document.getElementById('num2').value;
    const operation = document.getElementById('operation').value;
    const resultDiv = document.getElementById('result');

    const num1 = parseFloat(num1Input);
    const num2 = parseFloat(num2Input);

    const calculator = new Calculator();
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Помилка: Введено некоректні числа.";
    } else {
        switch (operation) {
            case '+':
                result = calculator.add(num1, num2);
                break;
            case '-':
                result = calculator.subtract(num1, num2);
                break;
            case '*':
                result = calculator.multiply(num1, num2);
                break;
            case '/':
                result = calculator.divide(num1, num2);
                break;
            default:
                result = "Помилка: Невідома операція.";
        }
    }

    resultDiv.textContent = "Результат: " + result;
});
