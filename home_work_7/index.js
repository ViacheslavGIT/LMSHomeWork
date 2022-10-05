const validateValue = (value) => {
  if (value === undefined || value === null) {
    return;
  }
  return String(value);
};

const EMPTY_VALUE = "Empty field";

/*
1. Cтворити функцію, яка створює та реєструє нову команду у
автопробізі. Під час виклику функції потрібно передати дані
про команду - назва команди, ім'я водія, рік народження водія,
марка автомобіля, спонсор команди та чи водій допущений до
автопробігу
*/

const createAndRegisterNewTeam = (
  teamName,
  driverName,
  driverBirthYear,
  carBrand,
  sponsor,
  driverHasAccess
) => {
  const NEW_TEAM = {
    teamName: validateValue(teamName) || EMPTY_VALUE,
    driverName: validateValue(driverName) || EMPTY_VALUE,
    driverBirthYear: validateValue(driverBirthYear) || EMPTY_VALUE,
    carBrand: validateValue(carBrand) || EMPTY_VALUE,
    sponsor: validateValue(sponsor) || EMPTY_VALUE,
    driverHasAccess: Boolean(driverHasAccess),
  };

  return NEW_TEAM;
};

createAndRegisterNewTeam();
// console.log(createAndRegisterNewTeam("Spirit", "John", 1990, "BMW", "HDRezka"));

/*
2. Запитати дані (через prompt та циклічно) про нового користувача у системі та зберегти його в об'єкт.
Дані про користувача - логін, пароль, місто, країна, стать, вік
*/

const createNewUser = () => {
  const USER = {
    login: "",
    password: "",
    city: "",
    country: "",
    sex: "",
    age: "",
  };

  for (let key in USER) {
    const result = prompt(key);
    if (result === null || result === "") {
      USER[key] = EMPTY_VALUE;
    } else {
      USER[key] = result;
    }
  }
  return USER;
};
const newUser = createNewUser();
// console.log(newUser);

/*
3. Створити функцію, яка буде міняти дані в конкретного користувача
створеного пунктом вище. Наприклад сhangeUserData(user_1, city, 'Kherson).
Де user_1 - обʼєкт в якому буде мінятись, city - поле,
яке буде мінятися на нове значення - 'Kherson'
*/

const editUserData = (object, key, value) => {
  return object[key] = value;
};

editUserData(newUser, "city", "Chuguiv");
// console.log(newUser);

/*
4. Створити об'єкт cтудента - name, surname, age, course, city, greeting, addHomework. greeting - метод,
котрий виводить повідомлення через console.log('Hi. everyone!').
addHomework - метод, котрий виводить повідомлення
через console.log('Sending my howework... Please, wait')
*/

const STUDENT = {
  name: "Viacheslav",
  surname: "Sydorenko",
  age: 29,
  course: 1,
  city: "Dnipro",
  greeting: function () {
    return console.log("Hi everyone!");
  },
  addHomework: function () {
    return console.log("Sending my howework... Please, wait");
  },
};
STUDENT.greeting();
STUDENT.addHomework();

/*
5. Cтворити функцію isEmpty, яка повертає true,
якщо об’єкт не має властивостей (порожній), інакше false
*/

function isEmpty(value) {
  if (!validateValue(value) || typeof value !== "object") {
    return "Data is corrupted or invalid format";
  } else {
    return Object.keys(value).length === 0 ? true : false;
  }
}
isEmpty();
// const testObj = {}

// console.log(isEmpty(testObj));

/*
6. Створити об’єкт для зберігання виручки команди продавців, наприклад:
{Taras: 2000, Marta: 10 Ivan: 1200, Petro: 400, Roma: 366, Alina: 829}
*/

const SALES_TEAM_REVENUE = {
  Marta: 1000,
  Alina: 2000,
  Petro: 300,
  Taras: 4000,
  Roma: 800,
  Ivan: 5000,
};

/*
7. Створити фукнцію, яка працює з цим обʼєктом та
обчислює суму всіх виручок та виводить результат через сonsole.log
*/

const getSumSalesmensRevenue = (salesmen) => {
  let sumRevenue = 0;
  for (let revenue of Object.values(salesmen)) {
    sumRevenue += revenue;
  }
  return `The total revenue is ${sumRevenue} UAH`;
};
console.log(getSumSalesmensRevenue(SALES_TEAM_REVENUE));

/*
8. Створити фукнцію, яка працює з цим обʼєктом та яка знаходить продавця
з найменшою виручкою та виводить результат через сonsole.log у
зрозумілому форматі
*/

const getMinRevenue = (salesmen) => {
  const arraySalesmen = Object.entries(salesmen);
  const arraySalesmenSorted = arraySalesmen.sort((salesman1, salesman2) => {
    return salesman1[1] - salesman2[1];
  })[0];
  return `${arraySalesmenSorted[0]} has the lowest revenue, which is climbing: ${arraySalesmenSorted[1]} UAH `;
};
console.log(getMinRevenue(SALES_TEAM_REVENUE));

/*
9. Створити фукнцію, яка знаходить продавця з найбільшою
виручкою та виводить результат через сonsole.log у зрозумілому форматі
*/

const getMaxRevenue = (salesmen) => {
  const arraySalesmen = Object.entries(salesmen);
  const arraySalesmenSorted = arraySalesmen.sort((salesman1, salesman2) => {
    return salesman2[1] - salesman1[1];
  })[0];
  return `${arraySalesmenSorted[0]} has the largest revenue, which is climbing: ${arraySalesmenSorted[1]} UAH `;
};
console.log(getMaxRevenue(SALES_TEAM_REVENUE));

/*
10. Створити фукнцію, яка випадковим чином вибирає продавця місяця та
виводить привітання цьому працівнику через сonsole.log у зрозумілому форматі
*/

const showSalesmanOfTheMonth = (salesmen) => {
  const arraySalesmen = Object.keys(salesmen);
  let randomSalesman = Math.floor(Math.random() * arraySalesmen.length);
  return `Congratulations, ${arraySalesmen[randomSalesman]}, you are the seller of the month!`;
};
console.log(showSalesmanOfTheMonth(SALES_TEAM_REVENUE));
