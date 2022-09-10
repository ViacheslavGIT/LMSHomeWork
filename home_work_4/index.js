//№1
console.log(+(0.1 + 0.2).toFixed(2));

// №2
const userLogin = prompt("Please enter login");
const userPassword = prompt("Please enter password");

if (userLogin !== "admin" && userPassword !== "12pass33210") {
  console.log("Current User does not have access to the admin panel");
} else if (userLogin !== "admin" || userPassword !== "12pass33210") {
  console.log("Invalid login or password");
} else {
  console.log("Successfully logged in");
}

// №3
const moneyAmount = +prompt("Скільки гошей на кармані?");

const CHERRY_PRICE = 21;
const CARROT_PRICE = 8;
const POTATO_PRICE = 12;
const CHERRY = "черешня";
const CARROT = "морква";
const POTATO = "картопля";

console.log(
  `Черешня: ${CHERRY_PRICE} грн, Морква: ${CARROT_PRICE} грн, Картопля: ${POTATO_PRICE} грн`
);

if (
  moneyAmount < CHERRY_PRICE &&
  moneyAmount < CARROT_PRICE &&
  moneyAmount < POTATO_PRICE
) {
  console.log(
    "Нажаль, у Вас недостатньо коштів для купівлі хоча б 1кг будь-якого продукту"
  );
} else {
  const purchase = prompt("Що надо?").toLowerCase();
  const notEnoghtMoneyMessage = `У вас недостатньо коштів, для купівлі хоча б 1кг ${purchase}`;

  if (purchase !== CHERRY && purchase !== CARROT && purchase !== POTATO) {
    console.log("Такого продукту нема");
  } else if (purchase === CHERRY) {
    if (moneyAmount >= CHERRY_PRICE) {
      console.log(
        `За ${moneyAmount} грн. Ви можете придбати ${Math.trunc(
          moneyAmount / CHERRY_PRICE
        )}кг даного продукту. У Вас залишиться ${moneyAmount % CHERRY_PRICE}грн`
      );
    } else {
      console.log(notEnoghtMoneyMessage);
    }
  } else if (purchase === CARROT) {
    if (moneyAmount >= CARROT_PRICE) {
      console.log(
        `За ${moneyAmount} грн. Ви можете придбати ${Math.trunc(
          moneyAmount / CARROT_PRICE
        )}кг даного продукту. У Вас залишиться ${moneyAmount % CARROT_PRICE}грн`
      );
    } else {
      console.log(notEnoghtMoneyMessage);
    }
  } else if (purchase === POTATO) {
    if (moneyAmount >= POTATO_PRICE) {
      console.log(
        `За ${moneyAmount} грн. Ви можете придбати ${Math.trunc(
          moneyAmount / POTATO_PRICE
        )}кг даного продукту. У Вас залишиться ${moneyAmount % POTATO_PRICE}грн`
      );
    } else {
      console.log(notEnoghtMoneyMessage);
    }
  }
}

// №4
const sideA = +prompt("Довжина сторони 'A' ?");
const sideB = +prompt("Довжина сторони 'B' ?");
const sideC = +prompt("Довжина сторони 'C' ?");

if (sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB) {
  console.log("Такий трикутник може існувати");
} else {
  console.log("Такий трикутник не існує");
}

// №5
(2 && 0 && 3) || (true && false); // false

false || " " || (3 && true); // " "

1 && 1000 && '0' || 0 && 'Bob' // '0'

-1 || 0 || 0 && "" || 1010 // -1