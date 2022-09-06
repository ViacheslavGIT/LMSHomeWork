const userName = prompt("Яке Ваше імʼя?");

const userSurname = prompt("Яке Ваше прізвище?");

const favoriteNumber = prompt("Яке Ваше улюблене число?");

const userData = `Вітаю, ${userName} ${userSurname}! Ваше улюблене число - ${favoriteNumber}`;
console.log(userData);
alert(userData);

let firstNumber = +prompt("Введіть перше число");

let secondNumber = +prompt("Введіть друге число");

let plus = fistNumber + secondNumber;
console.log(plus);

let minus = fistNumber - secondNumber;
console.log(minus);

let divide = fistNumber / secondNumber;
console.log(divide);

let multiplied = fistNumber * secondNumber;
console.log(multiplied);

const userBirthday = prompt("В якому році Ви народились?");

const currentYear = new Date().getFullYear();

let userAge = currentYear - userBirthday;
console.log(userAge);

let numberOne = 10;

let numberTwo = 5;

let result = numberOne / numberTwo;

let resultToUser = `Остача від ділення числа ${numberOne} на число ${numberTwo} рівна ${result}`;
console.log(resultToUser);

const anyNumber = +prompt("Введіть будь-яке число");

let evenNumber = anyNumber % 2 == 0;
console.log(evenNumber);
