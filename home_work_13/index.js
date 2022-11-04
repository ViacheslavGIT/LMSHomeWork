//1

const inputField = document.querySelector("#input-field");
const buttonStart = document.querySelector("#button-start");
const wrapper = document.querySelector(".timer-wrapper");
const boom = document.createElement("img");
const timerField = document.querySelector("#timer");

wrapper.appendChild(boom);

function setTimer() {
  buttonStart.setAttribute("disabled", "disabled");

  let timeLeft = +inputField.value + 1;
  inputField.value = "";

  let timer = setInterval(function () {
    if (--timeLeft >= 1) {
      timerField.innerHTML = `В'ЄБЕ через ${timeLeft} сек.`;
    } else {
      if (!boom.hasAttribute("src")) {
        timerField.innerHTML = "БУУУМ!!! русні ПІЗДА !";
        boom.src =
          "https://cdn.fishki.net/upload/post/2017/09/07/2375438/tn/a75934ee4d8c006115bfec24d164168b.jpg";
      } else {
        timerField.innerHTML = "Вже горить!";
        boom.src =
          "https://telegraf.com.ua/static/storage/thumbs/1044x587/4/85/2dce2d72-0b81157362e61b33e32f61ac932e0854.webp?v=8757_1";
      }
      wrapper.appendChild(boom);
      clearInterval(timer);
      buttonStart.removeAttribute("disabled");
    }
  }, 1000);
}

buttonStart.addEventListener("click", () => {
  if (Number(inputField.value)) {
    setTimer();
  } else timerField.innerHTML = "enter value";
});

//2

const countdown = document.querySelector("#timer-to");
const selectDate = document.querySelector("#select");
const startTimer = document.querySelector("#start-timer");

startTimer.addEventListener("click", () => {
  if (selectDate.valueAsNumber) {
    setInterval("updateTimerTo()", 1000);
  } else {
    countdown.innerHTML = "Enter full date";
  }
});
function updateTimerTo() {
  if (selectDate.valueAsNumber > new Date()) {
    const now = moment(new Date());
    const end = moment(selectDate.valueAsNumber);
    const duration = moment.duration(end.diff(now))._data;

    const { years, months, days, hours, minutes, seconds } = duration;

    countdown.innerHTML = `<div> Before the start of the company left - 
      ${years} years : ${months} month : ${days} days : ${hours} hours : ${minutes} mins : ${seconds} secs
      <div>`;
  } else {
    countdown.innerHTML = "Error! Invalid date specified";
  }
}

//3

const selectContainer = document.querySelector("#select-container");
const phoneName = document.querySelector("#phone");
const phoneRAM = document.querySelector("#RAM");
const phoneSSD = document.querySelector("#SSD");
const phonePriceOutput = document.createElement("span");
selectContainer.append(phonePriceOutput);

const calculatePhonePrice = document.querySelector("#calculate");

calculatePhonePrice.addEventListener("click", () => {
  const phonePrice =
    Number(phoneName.value) + Number(phoneRAM.value) + Number(phoneSSD.value);
  phonePriceOutput.innerHTML = `${phonePrice} USD`;
});

function setOptionsToSelect(array, parentNode) {
  array.forEach((el) => {
    let documentFragment = parentNode.appendChild(
      document.createElement("option")
    );
    documentFragment.innerText = Object.values(el)[0];
    documentFragment.setAttribute("value", Object.values(el)[1]);
  });
}
const arrayPhones = [
  {
    name: "Iphone",
    price: 600,
  },
  {
    name: "Samsung",
    price: 470,
  },
  {
    name: "Nokia",
    price: 350,
  },
  {
    name: "HTC",
    price: 270,
  },
  {
    name: "Xiaomi",
    price: 290,
  },
  {
    name: "Huawei",
    price: 400,
  },
  {
    name: "OnePlus",
    price: 300,
  },
];
const arrayRAM = [
  {
    size: "2",
    price: 50,
  },
  {
    size: "4",
    price: 100,
  },
  {
    size: "8",
    price: 200,
  },
  {
    size: "12",
    price: 320,
  },
];

const arraySSD = [
  {
    size: "64",
    price: 70,
  },
  {
    size: "128",
    price: 150,
  },
  {
    size: "256",
    price: 270,
  },
  {
    size: "512",
    price: 400,
  },
  {
    size: "1 tb",
    price: 550,
  },
];
setOptionsToSelect(arrayPhones, phoneName);
setOptionsToSelect(arrayRAM, phoneRAM);
setOptionsToSelect(arraySSD, phoneSSD);
