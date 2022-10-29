const calculator = document.querySelector("#calculator");
const numbers = document.querySelectorAll(".item-number");
const outputField = document.getElementById("result");

let firstValue = "";
let mathOperator = "";
let secondValue = "";
let equals = "";
let dot = "";

function fadeCalculatorButton(btnValue) {
  const clickedNumber = document.getElementById(btnValue);
  clickedNumber.classList.add("fade-number");

  setTimeout(() => {
    clickedNumber.classList.remove("fade-number");
  }, 0);
}

function getResulOperations() {
  let result;
  if (mathOperator === "+") {
    result = +firstValue + +secondValue;
    return parseFloat(result.toFixed(10));
  }
  if (mathOperator === "-") {
    result = +firstValue - +secondValue;
    return parseFloat(result.toFixed(10));
  }
  if (mathOperator === "x" || mathOperator === "*") {
    result = +firstValue * +secondValue;
    return parseFloat(result.toFixed(10));
  }
  if (mathOperator === "÷" || mathOperator === "/") {
    +secondValue === 0
      ? (result = "Error: Invalid operation")
      : (result = +firstValue / +secondValue);
    return parseFloat(result.toFixed(10));
  } else {
    return;
  }
}

function handleClick(event) {
  const { target } = event;
  switch (true) {
    case target.className.includes("item-number"):
      fadeCalculatorButton(target.id);

      if (mathOperator) {
        !secondValue.includes(dot)
          ? (secondValue = secondValue.concat(dot + target.innerHTML))
          : (secondValue = secondValue.concat(target.innerHTML));
        outputField.value = secondValue;
        dot = "";
      } else {
        !firstValue.includes(dot)
          ? (firstValue = firstValue.concat(dot + target.innerHTML))
          : (firstValue = firstValue.concat(target.innerHTML));
        outputField.value = firstValue;
        dot = "";
      }
      break;
    case target.className.includes("item-comma"):
      dot = target.innerHTML;
      break;
    case target.className.includes("item-clear"):
      outputField.value = "";
      firstValue = "";
      secondValue = "";
      mathOperator = "";
      dot = "";
      break;
    case target.className.includes("symbol"):
      mathOperator = target.innerHTML;
      break;
    case target.className.includes("item-equals"):
      if (secondValue) {
        equals = getResulOperations();
        secondValue = "";
        dot = "";

        outputField.value = equals;
        if (equals) {
          firstValue = String(equals);
        }
      }
      break;
    default:
      break;
  }
}

function handleKeydown(event) {
  const { key, code } = event;

  if (!isNaN(+key) && code !== "Space") {
    fadeCalculatorButton(key);
    if (mathOperator) {
      !secondValue.includes(dot)
        ? (secondValue = secondValue.concat(dot + key))
        : (secondValue = secondValue.concat(key));
      outputField.value = secondValue;
      dot = "";
    } else {
      !firstValue?.includes(dot)
        ? (firstValue = firstValue.concat(dot + key))
        : (firstValue = firstValue.concat(key));
      outputField.value = firstValue;
      dot = "";
    }
  }

  if (key === ".") {
    dot = key;
  }

  if (key === "Backspace") {
    outputField.value = "";
    firstValue = "";
    secondValue = "";
    mathOperator = "";
    dot = "";
  }

  if (key === "/" || key === "*" || key === "-" || key === "+") {
    mathOperator = key;
  }

  if (key === "=" || key === "Enter") {
    if (secondValue) {
      equals = getResulOperations();
      outputField.value = equals;
      secondValue = "";
      mathOperator = "";
      dot = "";

      if (equals) {
        firstValue = String(equals);
      }
    }
  }
}

calculator.addEventListener("click", handleClick);
document.addEventListener("keydown", handleKeydown);
