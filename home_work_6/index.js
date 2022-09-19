const checkIfValueNotValid = (variable) => {
  // undefined == null -> true
  // undefined === null -> false
  if (variable == null || isNaN(variable)) {
    return true;
  }
  return false;
};

//1.Написати функцію, яка приймає 4 аргументи і шукає найменше число серед них

const showMinNumber = (num1, num2, num3, num4) => {
  const numArray = [].concat(num1, num2, num3, num4);
  const filteredArr = numArray.filter((el) => !checkIfValueNotValid(el));
  if (filteredArr.length !== 0) {
    return `${Math.min(...filteredArr)} найменше число з вказаних`;
  } else {
    return "Введіть числа для обробки";
  }
};
console.log(showMinNumber());

/*
2.Написати функцію, яка приймає 2 аргументи та шукає найбільший спільний дільник для них.
Якщо такого числа немає, то повідомляти про відсутність
*/

const getGreatestCommonDivider = (num1, num2) => {
  const arrDividersNum1 = [];

  if (checkIfValueNotValid(num1) || checkIfValueNotValid(num2)) {
    return "Введіть два числа для обробки";
  }

  // for typeof string and number
  if (num1 == 0 || num2 == 0) {
    return "Числа не повинні дорівнювати 0";
  }

  if (!Number.isInteger(+num1) || !Number.isInteger(+num2)) {
    return "Числа повинні бути цілі";
  } else {
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);

    for (let i = 1; i <= num1; i++) {
      if (num1 % i === 0) {
        arrDividersNum1.push(i);
      }
    }

    const arrDividersNum2 = [];
    for (let i = 1; i <= num2; i++) {
      if (num2 % i === 0) {
        arrDividersNum2.push(i);
      }
    }

    const arrCommonDividers = arrDividersNum1
      .filter((element) => arrDividersNum2.includes(element))
      .sort((el1, el2) => {
        return el2 - el1;
      });

    return `${arrCommonDividers[0]} найбільший спільний дільник`;
  }
};
console.log(getGreatestCommonDivider());

//3.Написати функцію, яка приймає 1 аргумент та перевіряє чи дане число ідеальне

let perfectNumber = 0;
const checkIfNumIsPerfect = (num) => {
  num = +num;
  if (checkIfValueNotValid(num)) {
    return "Введіть число";
  } else if (num < 2 || !Number.isInteger(num)) {
    return `${num} не ідеальне число`;
  } else {
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        perfectNumber = perfectNumber + i;
      }
      if (i === num - 1) {
        if (perfectNumber === num) {
          return `${num} ідеальне число!`;
        } else {
          return `${num} не ідеальне число`;
        }
      }
    }
  }
};
console.log(checkIfNumIsPerfect(-4));

/*
4.Написати функцію, яка приймає 2 аргументи та обраховує суму в цьому проміжку. 
Зверніть увагу, що можна передати 10 та -2, як аргументи. 
Суму всіх чисел в цьому проміжку також треба обчислити
*/
const getRange = (start, end) => {
  if (checkIfValueNotValid(start) || checkIfValueNotValid(end)) {
    return "Будь ласка, введіть два числа";
  }

  if (start === end) {
    return "Будь ласка, введіть два різні числа";
  }

  if (start > end) {
    let revert = start;
    start = end;
    end = revert;
  }

  let sum = 0;

  for (let i = +start; i <= +end; i++) {
    sum += i;
  }
  return `Сума чисел в проміжку від ${start} до ${end} дорівнює ${sum}`;
};
console.log(getRange());

//5.Написати функцію, яка приймає та конвертує температуру із Цельсій у Фаренгейт

const convertCelsiusToFahrenheit = (celsius) => {
  if (checkIfValueNotValid(celsius)) {
    return "Введіть градуси Цельсію (°C) цифрами";
  } else {
    return `${celsius * 1.8 + 32}°F`;
  }
};
console.log(convertCelsiusToFahrenheit());

//6.Написати фунцію, яка генерує випадкове ціле число в проміжку від 0 до 40
const MIN_NUMBER = 0;
const MAX_NUMBER = 40;
const getRandomNumber = () => {
  return `Рандомне число в проміжку від 0 до 40 = ${Math.floor(
    Math.random() * (MAX_NUMBER - MIN_NUMBER + 1) + MIN_NUMBER
  )}`;
};
console.log(getRandomNumber());
