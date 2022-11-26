const selectElement = document.querySelector("#select-field");
const btnGetWeather = document.querySelector(".get-weather");
const cityInfoContainer = document.querySelector(".city-info");
const weatherContainer = document.querySelector(".weather-container");
const neighborsContainer = document.querySelector(".neighbors-container");
const neighborsCity = document.querySelector(".neighbors-city");

const img = {
  sunny: "https://developer.accuweather.com/sites/default/files/01-s.png",
  cloudy: "https://developer.accuweather.com/sites/default/files/07-s.png",
  partlySunny: "https://developer.accuweather.com/sites/default/files/03-s.png",
  rain: "https://developer.accuweather.com/sites/default/files/18-s.png",
};

const API_KEY = "8QyOAnl9CiR9xyWDd2qVEaSRgZAFJXha";

const urlDailyForecasts =
  "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
const urlNeighbors =
  "http://dataservice.accuweather.com/locations/v1/cities/neighbors/";

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
    weatherItem.setAttribute(
      "value",
      `${Object.values(el)[1]}_${Object.values(el)[0]}`
    );
  });
}
setCityId(cityData, selectElement);

btnGetWeather.addEventListener("click", () => {
  const splitValue = selectElement.value.split("_");

  loadJSON(splitValue[0], splitValue[1]);
});

neighborsContainer.addEventListener("click", (e) => {
  const { target } = e;
  loadJSON(target.value, target.innerText);
});

const renderNeighbors = (neighbors) => {
  neighborsContainer.innerHTML = "";

  neighbors.forEach((el) => {
    const { Key: key, LocalizedName: name } = el;
    const neighborsItem = neighborsContainer.appendChild(
      document.createElement("button")
    );
    neighborsItem.classList.add("neighbors-item");
    neighborsItem.setAttribute("value", key);
    neighborsItem.innerHTML = name;
  });
};

const renderdailyForecast = (dailyForecasts, currentCity) => {
  weatherContainer.innerHTML = "";

  dailyForecasts.forEach((el) => {
    const { Date: time, Day: day, Night: night, Temperature: temperature } = el;
    const weatherItem = weatherContainer.appendChild(
      document.createElement("div")
    );
    const imgFragment = weatherItem.appendChild(document.createElement("img"));
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
    const date = new Date(time).toLocaleDateString();
    const conditionsDay = day.IconPhrase;
    const conditionsNight = night.IconPhrase;

    const minTemperature = Math.round((temperature.Minimum.Value - 32) / 1.8);
    const maxTemperature = Math.round((temperature.Maximum.Value - 32) / 1.8);

    weatherItem.classList.add("weather");
    const { sunny, cloudy, partlySunny, rain } = img;
    if (day.HasPrecipitation === true) {
      imgFragment.src = rain;
      imgFragment.alt = "rain";
      weatherItem.classList.add("rain");
    }

    if (
      conditionsDay.toLowerCase().includes("cloud") ||
      conditionsDay.toLowerCase().includes("dreary")
    ) {
      imgFragment.src = cloudy;
      imgFragment.alt = "cloudy";
      weatherItem.classList.add("cloudy");
    } else if (conditionsDay.toLowerCase().includes("partly")) {
      imgFragment.src = partlySunny;
      imgFragment.alt = "partly sunny";
      weatherItem.classList.add("partly");
    } else if (conditionsDay.toLowerCase().includes("sun")) {
      imgFragment.src = sunny;
      imgFragment.alt = "sunny";
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

  cityInfoContainer.innerHTML = `Weather in ${currentCity} for 5 days`;
  neighborsCity.innerHTML = `Cities near ${currentCity}`;
};

async function loadJSON(value, currentCity) {
  try {
    const neighbors = await fetch(`${urlNeighbors}${value}?apikey=${API_KEY}`);
    if (neighbors.status === 200) {
      const resultNeighbors = await neighbors.json();
      renderNeighbors(resultNeighbors, currentCity);
    }

    const response5days = await fetch(
      `${urlDailyForecasts}${value}?apikey=${API_KEY}`
    );
    if (response5days.status === 200) {
      const result = await response5days.json();
      const dailyForecasts = result?.DailyForecasts;
      renderdailyForecast(dailyForecasts, currentCity);
    }
  } catch (error) {
    neighborsContainer.innerHTML = "";
    weatherContainer.innerHTML = "";
    neighborsCity.innerHTML = "";
    cityInfoContainer.innerHTML = "Something is wrong";
    console.log(error.message);
  }
}
