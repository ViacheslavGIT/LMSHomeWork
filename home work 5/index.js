//№1
for (let i = 10; i <= 25; i += 0.5) {
  console.log(i);
}

//№2
const youNumber = +prompt("Твоє число?");
let counter = 0;

if (isNaN(youNumber) || youNumber === 0) {
  alert("Хибне значення");
} else {
  for (let i = 1; i <= 100; i++) {
    if (youNumber % i === 0) {
      ++counter;
    }
    if (i === 100) {
      alert(`Число ${youNumber} ${counter > 2 ? "не є" : "є"} простим`);
      console.log(counter);
    }
  }
}

//№3
const money = +prompt("Введіть суму, щоб розрахувати знижку");

switch (true) {
  case money <= 0:
    alert("Вказано хибне значення");
    break;
  case isNaN(money):
    alert("Введіть суму цифрами");
    break;
  case money < 100:
    alert("Ваша знижка 3%");
    break;
  case money > 100 && money < 200:
    alert("Ваша знижка 5%");
    break;
  case money >= 200:
    alert("Ваша знижка 7%");
    break;
  default:
    break;
}

// №4
for (let i = 2; i <= 9; i++) {
  console.log("Таблиця множення на :", i);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

//№5
const ONE_USD = 36.76;
for (let i = 10; i <= 100; i += 10) {
  console.log(`${i} USD = ${(ONE_USD * i).toFixed(2)} UAH`);
}

//№6
let odd = 0;
let even = 0;
let negative = 0;
let positive = 0;
let zero = 0;

for (let i = 0; i < 15; i++) {
  const menyNumber = +prompt(`Вкажіть свое число ${15 - i} раз`);
  if (isNaN(menyNumber)) {
    i--;
    alert("Введіть цифрами");
  } else if (menyNumber < 0) {
    ++negative;
  } else if (menyNumber > 0) {
    ++positive;
  } else {
    ++zero;
  }
  if (menyNumber % 2) {
    ++even;
  } else {
    ++odd;
  }

  // last two cases don't work
  // please comment why
  // can't find the answer

  //   switch (true) {
  //     case menyNumber === 0:
  //       ++zero;
  //       break;
  //     case menyNumber < 0:
  //       ++negative;
  //     case menyNumber > 0:
  //       ++positive;
  //     case menyNumber % 2 == 0:
  //       ++odd;
  //     case menyNumber % 2 != 0:
  //       ++even;
  //     default :
  //       break;
  //   }

  if (i === 14) {
    console.log(
      `Додатніх ${positive}, від'ємних ${negative}, нулів ${zero}, а також ${odd} парних і ${even} непарних`
    );
  }
}
