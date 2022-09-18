const checkIfValueValid = (variable) => {
  if (variable == null || isNaN(variable)) {
    return false;
  }
  return true;
};

//1.Написати функцію, яка приймає 4 аргументи і шукає найменше число серед них

const showMin = (num1, num2, num3, num4) => {
  const numArray = [].concat(num1, num2, num3, num4);
  const filteredArr = numArray.filter((el) => checkIfValueValid(el));
  if (filteredArr.length !== 0) {
    return `${Math.min(...filteredArr)} найменше число з вказаних`;
  } else {
    return "Введіть числа для обробки";
  }
};
console.log(showMin());

/*
2.Написати функцію, яка приймає 2 аргументи та шукає найбільший спільний дільник для них.
Якщо такого числа немає, то повідомляти про відсутність
*/

const getGreatestCommonDivider = (num1, num2) => {
  const arrDividersNum1 = [];

  if (!checkIfValueValid(num1) || !checkIfValueValid(num2)) {
    return "Введіть два числа цифрами для обробки";
  } else if (!Number.isInteger(+num1) || !Number.isInteger(+num2)) {
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

let perfectNum = 0;
const checkIfNumIsPerfect = (num) => {
  num = +num;
  if (!checkIfValueValid(num)) {
    return "Введіть число";
  } else if (num < 2 || !Number.isInteger(num)) {
    return `${num} не ідеальне число`;
  } else {
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        perfectNum = perfectNum + i;
      }
      if (i === num - 1) {
        if (perfectNum === num) {
          return `${num} ідеальне число!`;
        } else {
          return `${num} не ідеальне число`;
        }
      }
    }
  }
};
console.log(checkIfNumIsPerfect());

/*
4.Написати функцію, яка приймає 2 аргументи та обраховує суму в цьому проміжку. 
Зверніть увагу, що можна передати 10 та -2, як аргументи. 
Суму всіх чисел в цьому проміжку також треба обчислити
*/
const getRange = (start, end) => {
  if (!checkIfValueValid(start) || !checkIfValueValid(end)) {
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
  return `Сума чисел в поміжку від ${start} до ${end} дорівнює ${sum}`;
};
console.log(getRange());

//5.Написати функцію, яка приймає та конвертує температуру із Цельсій у Фаренгейт

const convertCelsiusToFaringate = (celsius) => {
  if (checkIfValueValid(celsius)) {
    return `${celsius * 1.8 + 32}°F`;
  } else {
    return "Введіть градуси Цельсію (°C) цифрами";
  }
};
console.log(convertCelsiusToFaringate());

//6.Написати фунцію, яка генерує випадкове ціле число в проміжку від 0 до 40

const getRandomNum = () => {
  return `Рандомне число в проміжку від 0 до 40 = ${Math.floor(
    Math.random() * 40
  )}`;
};
console.log(getRandomNum());
