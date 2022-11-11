const selectElement = document.querySelector("#select-field");
const btnGetWeather = document.querySelector(".get-weather");

const img = {
  sunny: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  cloudy: "https://ssl.gstatic.com/onebox/weather/48/cloudy.png",
  partlySunny: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
  rain: "https://ssl.gstatic.com/onebox/weather/48/rain.png",
};

const container = document.querySelector(".weather-container");
const APIkey = "RdF8jJZyuFqd8UpHqodB7Hm1oT3HbP6v";
const xhr = new XMLHttpRequest();

const cityData = [
  { city: "Lviv", id: 324561 },
  { city: "Kharkiv", id: 323903 },
  { city: "Kyiv", id: 324505 },
  { city: "Chernihiv", id: 322162 },
  { city: "Odesa", id: 325343 },
  { city: "Mariupol", id: 323037 },
  { city: "Poltava", id: 325523 },
  { city: "Zhytomyr", id: 326609 },
  { city: "Cherkasy", id: 321985 },
  { city: "London", id: 328328 },
  { city: "Warsaw", id: 274663 },
  { city: "New York", id: 349727 },
];

function setCityId(array, parentNode) {
  array.forEach((el) => {
    const weatherItem = parentNode.appendChild(
      document.createElement("option")
    );
    weatherItem.innerText = Object.values(el)[0];
    weatherItem.setAttribute("value", Object.values(el)[1]);
  });
}
setCityId(cityData, selectElement);

btnGetWeather.addEventListener("click", loadData);

function loadData() {
  if (selectElement.value) {
    xhr.open(
      "GET",
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${selectElement.value}?apikey=${APIkey}`
    );
    xhr.send();
    xhr.onload = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        const result = JSON.parse(this.response);
        const dailyForecasts = result?.DailyForecasts;

        container.innerHTML = "";
        dailyForecasts.forEach((el) => {
          const weatherItem = container.appendChild(
            document.createElement("div")
          );
          const imgFragment = weatherItem.appendChild(
            document.createElement("img")
          );
          const dateFragment = weatherItem.appendChild(
            document.createElement("span")
          );
          const temperatureFragment = weatherItem.appendChild(
            document.createElement("span")
          );
          const conditionsDayFragment = weatherItem.appendChild(
            document.createElement("span")
          );
          const conditionsNightFragment = weatherItem.appendChild(
            document.createElement("span")
          );
          const date = new Date(el.Date).toLocaleDateString();
          const conditionsDay = el.Day.IconPhrase;
          const conditionsNight = el.Night.IconPhrase;

          const minTemperature = Math.round(
            (el.Temperature.Minimum.Value - 32) / 1.8
          );
          const maxTemperature = Math.round(
            (el.Temperature.Maximum.Value - 32) / 1.8
          );

          weatherItem.classList.add("weather");

          if (el.Day.HasPrecipitation === true) {
            imgFragment.src = img.rain;
            weatherItem.classList.add("rain");
          }

          if (conditionsDay.includes("cloud")) {
            imgFragment.src = img.cloudy;
            weatherItem.classList.add("cloudy");
          } else if (conditionsDay.includes("Partly")) {
            imgFragment.src = img.partlySunny;
            weatherItem.classList.add("partly");
          } else if (conditionsDay.includes("sun")) {
            imgFragment.src = img.sunny;
            weatherItem.classList.add("sunny");
          }

          dateFragment.classList.add("date");
          dateFragment.innerHTML = date;

          temperatureFragment.classList.add("temperature");
          temperatureFragment.innerHTML = `<span style="font-size: 12px">min </span>${minTemperature}° <span style="font-size: 12px">max </span>${maxTemperature}°`;

          conditionsDayFragment.classList.add("conditions");
          conditionsDayFragment.innerHTML = `Day: ${conditionsDay}`;

          conditionsNightFragment.classList.add("conditions");
          conditionsNightFragment.innerHTML = `Night: ${conditionsNight}`;
        });
      } else {
        container.innerHTML = "Something went wrong, please try again later";
      }
    };
  }
}
