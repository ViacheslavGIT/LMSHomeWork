const validateValue = (value) => {
  if (value === undefined || value === null) {
    return;
  }
  return value;
};

const EMPTY_VALUE_MESSAGE = "This value is not specified";

function addSpaseInArray(array) {
  if (validateValue(array) || !array?.length === 0)
    return array.map((el) => ` ${el}`);
  else {
    return EMPTY_VALUE_MESSAGE;
  }
}

const testObject1 = { key1: 2, key2: "blabla" };
const testObject2 = { key1: 2, key2: "blabla" };

//1.
Function.prototype.myOwnBind = function (context, ...arg) {
  const fn = this;
  return function () {
    fn.call(context, ...arg);
  };
};
function showTestObject(name, age) {
  console.log(this, name, age);
}

showTestObject.myOwnBind(testObject1, "test name", 23)();

//2.
function Man(name, age, sex, nationality, country, listCountriesToVisit) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.nationality = nationality;
  this.country = country;
  this.listCountriesToVisit = listCountriesToVisit;
}

function introduce() {
  if (this !== window) {
    return `Hello! My name is ${this.name}. I am ${
      this.age
    } years old. Now I live in ${
      this.country
    }. I dream to visit:${addSpaseInArray(this.listCountriesToVisit)}`;
  } else {
    return EMPTY_VALUE_MESSAGE;
  }
}
function showWakeUpMessage() {
  return `Good morning ${this.country}! I am ${
    this.nationality
  } and I am determined to visit:${addSpaseInArray(this.listCountriesToVisit)}`;
}
function showGoToBedMessage() {
  return `Good night! I'll go to bed. I hope I'll dream of my beloved ${this.country}`;
}
function showListCountriesToVisit() {
  return `Countries ${this.name} from ${
    this.country
  } wants to visit:${addSpaseInArray(this.listCountriesToVisit)}`;
}

const Den = new Man("Den", 25, "male", "Ukrainian", "Ukraine", [
  "Poland",
  "Portugal",
  "France",
]);
console.log(showWakeUpMessage.apply(Den));
console.log(showListCountriesToVisit.apply(Den));
console.log(showGoToBedMessage.call(Den));
console.log(introduce.apply(Den));

//3.
function checkObjectsEqual(object1, object2) {
  if (object1.length != object2.length) return "Objects are not equal";
  for (let i = 0; i < Object.keys(object1).length; i++)
    if (Object.keys(object1)[i] !== Object.keys(object2)[i])
      return "Objects are not equal";
  for (let i = 0; i < Object.values(object1).length; i++)
    if (Object.values(object1)[i] !== Object.values(object2)[i])
      return "Objects are not equal";
  return "Objects are equal";
}
console.log(checkObjectsEqual(testObject1, testObject2));

//4.
const NUMBERS = {
  number1: "",
  number2: "",
};
function getNumbers() {
  for (let key in this) {
    const result = prompt(`Enter ${key}`);
    if (validateValue(result)) {
      this[key] = result;
    } else {
      this[key] = EMPTY_VALUE_MESSAGE;
    }
  }
}
getNumbers.apply(NUMBERS);

function Calculator(obj) {
  this.numbers = {
    value1: +[obj.number1],
    value2: +[obj.number2],
  };
  this.calculateSum = function () {
    if (!isNaN(this.numbers.value1) && !isNaN(this.numbers.value2)) {
      return this.numbers.value1 + this.numbers.value2;
    } else {
      return EMPTY_VALUE_MESSAGE;
    }
  };

  this.calculateNSD = function () {
    if (
      validateValue(this.numbers.value1) &&
      validateValue(this.numbers.value2)
    ) {
      const arrDividersnumber1 = [];

      number1 = Math.abs(this.numbers.value1);
      number2 = Math.abs(this.numbers.value2);

      for (let i = 1; i <= number1; i++) {
        if (number1 % i === 0) {
          arrDividersnumber1.push(i);
        }
      }

      const arrDividersnumber2 = [];
      for (let i = 1; i <= number2; i++) {
        if (number2 % i === 0) {
          arrDividersnumber2.push(i);
        }
      }

      const arrCommonDividers = arrDividersnumber1
        .filter((element) => arrDividersnumber2.includes(element))
        .sort((el1, el2) => {
          return el2 - el1;
        });

      return arrCommonDividers[0];
    } else {
      return EMPTY_VALUE_MESSAGE;
    }
  };
  this.calculateNSK = function () {
    if (
      validateValue(this.numbers.value1) &&
      validateValue(this.numbers.value2)
    ) {
      return (
        (this.numbers.value1 * this.numbers.value2) /
        this.calculateNSD(this.numbers.value1, this.numbers.value2)
      );
    } else {
      return EMPTY_VALUE_MESSAGE;
    }
  };
}
const testCalculator = new Calculator(NUMBERS);
console.log(`${testCalculator.calculateSum()} Sum`);
console.log(`${testCalculator.calculateNSD()} NSD`);
console.log(`${testCalculator.calculateNSK()} NSK`);
