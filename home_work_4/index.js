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

const cherryPrice = 21;
const carrotPrice = 8;
const potatoPrice = 12;
const cherry = "черешня";
const carrot = "морква";
const potato = "картопля";

console.log(
  `Черешня: ${cherryPrice} грн, Морква: ${carrotPrice} грн, Картопля: ${potatoPrice} грн`
);

if (
  moneyAmount < cherryPrice &&
  moneyAmount < carrotPrice &&
  moneyAmount < potatoPrice
) {
  console.log(
    "Нажаль, у Вас недостатньо коштів для купівлі хоча б 1кг будь-якого продукту"
  );
} else {
  const purchase = prompt("Що надо?").toLowerCase();
  const notEnoghtMoneyMessage = `У вас недостатньо коштів, для купівлі хоча б 1кг ${purchase}`;

  if (purchase !== cherry && purchase !== carrot && purchase !== potato) {
    console.log("Такого продукту нема");
  } else if (purchase === cherry) {
    if (moneyAmount >= cherryPrice) {
      console.log(
        `За ${moneyAmount} грн. Ви можете придбати ${Math.trunc(
          moneyAmount / cherryPrice
        )}кг даного продукту. У Вас залишиться ${moneyAmount % cherryPrice}грн`
      );
    } else {
      console.log(notEnoghtMoneyMessage);
    }
  } else if (purchase === carrot) {
    if (moneyAmount >= carrotPrice) {
      console.log(
        `За ${moneyAmount} грн. Ви можете придбати ${Math.trunc(
          moneyAmount / carrotPrice
        )}кг даного продукту. У Вас залишиться ${moneyAmount % carrotPrice}грн`
      );
    } else {
      console.log(notEnoghtMoneyMessage);
    }
  } else if (purchase === potato) {
    if (moneyAmount >= potatoPrice) {
      console.log(
        `За ${moneyAmount} грн. Ви можете придбати ${Math.trunc(
          moneyAmount / potatoPrice
        )}кг даного продукту. У Вас залишиться ${moneyAmount % potatoPrice}грн`
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