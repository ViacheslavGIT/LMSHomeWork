const validateValue = (value) => {
  if (value === undefined || value === null) {
    return;
  }
  return value;
};
const EMPTY_VALUE = "This value is not specified";

//1 Створити масив, довжину та елементи якого задає користувач (через prompt).
const testArray = [];

for (let i = 1; i < 2; i++) {
  const lengthOfArray = +prompt(
    "Enter the length of the array as a number (from 1 to 10)"
  );
  if (isNaN(lengthOfArray) || lengthOfArray > 10) {
    i--;
  } else {
    for (let i = 1; i <= lengthOfArray; i++) {
      const enteredValue = +prompt(`Enter a numeric value №${i}`);
      if (!isNaN(enteredValue)) {
        testArray.push(enteredValue);
      } else {
        i--;
      }
    }
  }
}

console.log(testArray);
const sortedTestArray = testArray.sort((a, b) => a - b);

console.log(sortedTestArray);

/*
3.0 Дано масив - список покупок. Кожен елемент масиву - це обʼєкт вигляду:
{productName: 'bread', productPrice: 14.5, productQuantity: 2}.
Мінімальний довжина такого масиву - 6
*/

const productsList = [
  { productName: "bread", productPrice: 14.5, productQuantity: 2 },
  { productName: "salo", productPrice: 120.5, productQuantity: 4 },
  { productName: "garlic", productPrice: 60.5, productQuantity: 13 },
  { productName: "carrots", productPrice: 14.5, productQuantity: 22 },
  { productName: "cabbage", productPrice: 12.5, productQuantity: 44 },
  { productName: "potatoes", productPrice: 6, productQuantity: 56 },
];

// 3.1 Порахувати загальну вартість корзини та вивести суму у зрозумілому форматі
const totalProductPrice = productsList.reduce(
  (sum, price) => sum + price.productPrice * price.productQuantity,
  0
);
console.log(`Total cost: ${totalProductPrice}`);

// 3.2 Порахувати найменшу кількість продукту, який потрібно купити
const minQuantity = productsList.sort(
  (el1, el2) => el1.productQuantity - el2.productQuantity
)[0];
console.log(
  `Least of all ${minQuantity.productName}: ${minQuantity.productQuantity} pieces`
);

// 3.3 Порахувати загальну кількість продуктів
const totalProductQuantity = productsList.reduce(
  (sum, quantity) => sum + quantity.productQuantity,
  0
);
console.log(`Total products: ${totalProductQuantity}`);

// 3.4 Знайти найдорожчий продукт
const mostExpensiveProduct = productsList.sort(
  (el1, el2) => el2.productPrice - el1.productPrice
)[0];
console.log(
  `Most expensive: ${mostExpensiveProduct.productName}, it costs ${mostExpensiveProduct.productPrice}`
);

// 3.5 Створити функцію, яка повинна додавати новий продукт в існуючий масив
const createNewProduct = () => {
  const NEW_PRODUCT = {
    productName: "",
    productPrice: 0,
    productQuantity: 0,
  };
  for (const [key] of Object.entries(NEW_PRODUCT)) {
    const value = prompt([key]);
    if (!validateValue(value) && key === "productName") {
      NEW_PRODUCT[key] = EMPTY_VALUE;
    } else if (key === "productPrice" || key === "productQuantity") {
      NEW_PRODUCT[key] = Number(value) ? Number(value) : 0;
    } else {
      NEW_PRODUCT[key] = value;
    }
  }
  productsList.push(NEW_PRODUCT);
  return productsList;
};
console.log(createNewProduct());

console.log(productsList);

/*
  for (let key of NEW_PRODUCT) {
    const value = prompt(key);
    if (!validateValue(value) && key === "productName") {
      NEW_PRODUCT.key = EMPTY_VALUE;
    } else if (key === "productPrice" || key === "productQuantity") {
      NEW_PRODUCT.key = Number(value) ? Number(value) : 0;
    } else {
      NEW_PRODUCT.key = value;
    }
  }
};
 Uncaught TypeError: NEW_PRODUCT is not iterable
 at createNewProduct
 */

// 3.6 Створити функцію, яка повинна видаляти конкретний продукт із існуючий масиву продуктів
const deleteProduct = () => {
  const productValue = prompt("Enter product name to delete");
  if (validateValue(productValue)) {
    const indexOfElement = productsList.findIndex(
      (el) => el.productName === productValue
    );
    productsList.splice(indexOfElement, 1);
    return productsList;
  } else return "It is done";
};

console.log(deleteProduct());

//4.0 Дано масив [16, -3, 54,-4, 72,-56, 47, -12, 4, -16, 25, -37, 46, 4, -51, 27, -8, 4, -54, 76, -4, 12, 6, -35]
const arrayNumbers = [
  16, -3, 54, -4, -72, -56, 47, -12, 4, -16, 25, -37, 46, 4, -51, 27, -8, 4,
  -54, 76, -4, 12, 6, -35,
];

// 4.1 Знайти суму та кількість позитивних елементів.

const arrayPositiveNumbers = arrayNumbers.filter((number) => number >= 0);
const totalAmount = arrayPositiveNumbers.reduce((sum, number) => sum + number);
console.log(`Sum ${arrayPositiveNumbers.length} elements is: ${totalAmount}`);

//4.2 Знайти мінімальний елемент масиву та його порядковий номер
const minElementValue = Math.min(...arrayNumbers);
const indexMinElement = arrayNumbers.findIndex(
  (element) => element === minElementValue
);
console.log(
  `${minElementValue} the smallest element under the number is: ${indexMinElement}`
);

//4.3 Знайти максимальний елемент масиву та його порядковий номер
const maxElementValue = Math.max(...arrayNumbers);
const indexMaxElement = arrayNumbers.findIndex(
  (element) => element === maxElementValue
);
console.log(
  `${maxElementValue} the largest element under the number is: ${indexMaxElement}`
);

//4.4 Визначити кількість негативних елементів.
const arrayNegativeNumbers = arrayNumbers.filter((number) => number < 0);
console.log(`Quantity of negative numbers is: ${arrayNegativeNumbers.length}`);

//4.5 Знайти кількість непарних позитивних елементів
const arrayNotEvenNumbers = arrayPositiveNumbers.filter(
  (number) => number % 2 !== 0
);
console.log(`Quantity of not even numbers is: ${arrayNotEvenNumbers.length}`);

//4.6 Знайти суму парних позитивних елементів
const arrayEvenNumbers = arrayPositiveNumbers.filter(
  (namber) => namber % 2 === 0
);
const totalAmountEvenNumbers = arrayEvenNumbers.reduce(
  (sum, number) => sum + number
);
console.log(`Sum of even elements: ${totalAmountEvenNumbers}`);

//4.7 Знайти добуток позитивних елементів.
const multiplyEvenNumbers = arrayPositiveNumbers.reduce(
  (number1, namber2) => number1 * namber2,
  1
);
console.log(`Multiply positive elements is: ${multiplyEvenNumbers}`);
