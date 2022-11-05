//1

const outputCentury = document.querySelector("#result-calc-century");
const inputYear = document.querySelector("#year");
const buttonCalculateCentury = document.querySelector("#calc-century");

const getCentury = () =>
  inputYear.value && inputYear.value > 0
    ? (outputCentury.innerHTML = `${
        1 + Math.trunc(inputYear.value / 100)
      }th`)
    : (outputCentury.innerHTML = "Enter year");

buttonCalculateCentury.addEventListener("click", getCentury);

//4

const outputMinMax = document.querySelector("#result-calc-min-max");
const inputNumbers = document.querySelector("#min-max");
const buttonCalculateMinMax = document.querySelector("#calc-min-max");

const getMinMax = () => {
  if (inputNumbers.value) {
    const arrayNumbers = inputNumbers.value.split(" ");
    const resultValues = arrayNumbers
      .filter((el) => el !== "" && !isNaN(el))
      .sort((el1, el2) => +el2 - +el1);

    resultValues.length
      ? (outputMinMax.innerHTML = `${resultValues[0]} max, ${resultValues.at(
          -1
        )} min `)
      : (outputMinMax.innerHTML = "Enter at least one number");
  } else {
    outputMinMax.innerHTML = "Enter numbers";
  }
};

buttonCalculateMinMax.addEventListener("click", getMinMax);

//3

const outputReversString = document.querySelector("#result-calc-revers-str");
const inputString = document.querySelector("#revers-str");
const buttonReversString = document.querySelector("#calc-revers-str");

const reversStr = () => {
  if (inputString.value) {
    const arrayWords = inputString.value.split(" ");

    const arrayReversWords = arrayWords.map((element) => {
      if (element.length >= 5) {
        return element.split("").reverse().join("");
      } else {
        return element;
      }
    });
    const resultRevers = arrayReversWords.join(" ");
    outputReversString.innerHTML = resultRevers;
  } else {
    outputReversString.innerHTML = "Enter value";
  }
};

buttonReversString.addEventListener("click", reversStr);

//2

const outputStringVowels = document.querySelector("#result-calc-str-vowels");
const inputStringVowels = document.querySelector("#str-vowels");
const buttonCalculateStringVowels = document.querySelector("#calc-str-vowels");

const transformVowels = () => {
  if (inputStringVowels.value) {
    const arraySymbols = inputStringVowels.value.split("");
    const arrayTransform = arraySymbols.map((element) => {
      if (element.match(/[aeiou]/gi)) {
        return 1;
      } else {
        return 0;
      }
    });
    const resultTransform = arrayTransform.join("");
    outputStringVowels.innerHTML = resultTransform;
  } else {
    outputStringVowels.innerHTML = "Enter value";
  }
};

buttonCalculateStringVowels.addEventListener("click", transformVowels);

//5

const outputStringToPhoneNumber = document.querySelector(
  "#result-calc-transform-to-phone-number"
);
const inputStringToPhoneNumber = document.querySelector(
  "#transform-to-phone-number"
);
const buttonFormatStringToPhoneNumber = document.querySelector(
  "#calc-transform-to-phone-number"
);

const transformToPhoneNumber = () => {
  const value = String(Math.abs(inputStringToPhoneNumber.value));

  if (value && value.length === 10) {
    const arrayNumbers = value.split("");
    const phoneNumber = arrayNumbers
      .join("")
      .replace(/(...)(...)(.*)/, "($1) $2 $3");
    outputStringToPhoneNumber.innerHTML = phoneNumber;
  } else {
    outputStringToPhoneNumber.innerHTML = "Enter 10 symbols";
  }
};
buttonFormatStringToPhoneNumber.addEventListener(
  "click",
  transformToPhoneNumber
);
