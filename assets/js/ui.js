import { getWeatherData } from "./logic";
class Nav {
  constructor() {
    this.element = document.createElement("nav");
    this.render();
  }
  render() {
    this.element.innerHTML = `
          <form action="" id="searchCityForm">
            <input
              autocomplete="off"
              placeholder="Search for cities"
              class="location"
              type="text"
              name="location"
              id="location"
            />
          </form>
`;
  }
}

class TodayForecast {
  constructor(data) {
    this.element = document.createElement("section");
    this.data = data;
    this.element.classList.add("left");
    this.render();
  }

  render() {
    this.element.innerHTML = `
        <div class="today">
          <div class="current-forecast">
            <div class="info">
              <div class="info-top">
                <h2>${this.data.address.toUpperCase()}</h2>
                <p>${this.data.currentDayDescription}</p>
              </div>
              <div class="temp">
                <h1>${this.data.currentDayTemperature}</h1>
              </div>
            </div>
            <div class="img-section">
              <img src="./assets/images/sun.svg" alt="Sun" />
            </div>
          </div>

          <div class="hourly-forecast">
            <p>TODAY'S FORECAST</p>
            <div class="hours">
              <div class="hour">
                <p>06:00 AM</p>
                <img src="./assets/images/sun.svg" alt="sun" />
                <p class="hourly-temp">${this.data.currentDayHours[6].temp}</p>
              </div>
              <div class="hour">
                <p>09:00 AM</p>
                <img src="./assets/images/sun.svg" alt="sun" />
                <p class="hourly-temp">${this.data.currentDayHours[9].temp}</p>
              </div>
              <div class="hour">
                <p>12:00 PM</p>
                <img src="./assets/images/sun.svg" alt="sun" />
                <p class="hourly-temp">${this.data.currentDayHours[12].temp}</p>
              </div>
              <div class="hour">
                <p>3:00 PM</p>
                <img src="./assets/images/sun.svg" alt="sun" />
                <p class="hourly-temp">${this.data.currentDayHours[15].temp}</p>
              </div>
              <div class="hour">
                <p>06:00 PM</p>
                <img src="./assets/images/sun.svg" alt="sun" />
                <p class="hourly-temp">${this.data.currentDayHours[18].temp}</p>
              </div>
              <div class="hour">
                <p>09:00 PM</p>
                <img src="./assets/images/sun.svg" alt="sun" />
                <p class="hourly-temp">${this.data.currentDayHours[21].temp}</p>
              </div>
            </div>
          </div>

          <div class="air-conditions">
            <p>AIR CONDITIONS</p>
            <div class="conditions">
              <div class="condition">
                <img src="./assets/images/feel.svg" alt="Feel" />
                <div class="info">
                  <h4>Feel Like</h4>
                  <p>${this.data.currentDayFeelsLike}</p>
                </div>
              </div>
              <div class="condition">
                <img src="./assets/images/wind.svg" alt="Wind" />
                <div class="info">
                  <h4>Wind</h4>
                  <p>${this.data.currentDayWindSpeed}mph</p>
                </div>
              </div>
              <div class="condition">
                <img src="./assets/images/rain.svg" alt="Rain" />
                <div class="info">
                  <h4>Chances of Rain</h4>
                  <p>${this.data.chancesOfRain}%</p>
                </div>
              </div>
              <div class="condition">
                <img src="./assets/images/UV.svg" alt="UV" />
                <div class="info">
                  <h4>UV Index</h4>
                  <p>${this.data.UVIndex}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
  }
}
class WeekForecast {
  constructor(data) {
    this.element = document.createElement("section");
    this.element.classList.add("right");
    this.data = data;
    this.render();
  }

  render() {
    this.element.innerHTML = `
        <div class="week-forecast">
          <p>7-DAY FORECAST</p>
          <div class="day">
            <p class="name">${this.data.weekDays[1].datetime}</p>
            <div class="condition">${this.data.weekDays[1].conditions}</div>
            <p class="temp"><strong>${this.data.weekDays[1].temp}</strong>/${this.data.weekDays[1].tempmin}</p>
          </div>
          <div class="day">
            <p class="name">${this.data.weekDays[2].datetime}</p>
            <div class="condition">${this.data.weekDays[2].conditions}</div>
            <p class="temp"><strong>${this.data.weekDays[2].temp}</strong>/${this.data.weekDays[2].tempmin}</p>
          </div>
          <div class="day">
            <p class="name">${this.data.weekDays[3].datetime}</p>
            <div class="condition">${this.data.weekDays[3].conditions}</div>
            <p class="temp"><strong>${this.data.weekDays[3].temp}</strong>/${this.data.weekDays[3].tempmin}</p>
          </div>
          <div class="day">
            <p class="name">${this.data.weekDays[4].datetime}</p>
            <div class="condition">${this.data.weekDays[4].conditions}</div>
            <p class="temp"><strong>${this.data.weekDays[4].temp}</strong>/${this.data.weekDays[4].tempmin}</p>
          </div>
          <div class="day">
            <p class="name">${this.data.weekDays[5].datetime}</p>
            <div class="condition">${this.data.weekDays[5].conditions}</div>
            <p class="temp"><strong>${this.data.weekDays[5].temp}</strong>/${this.data.weekDays[5].tempmin}</p>
          </div>
          <div class="day">
            <p class="name">${this.data.weekDays[6].datetime}</p>
            <div class="condition">${this.data.weekDays[6].conditions}</div>
            <p class="temp"><strong>${this.data.weekDays[6].temp}</strong>/${this.data.weekDays[6].tempmin}</p>
          </div>
          <div class="day">
            <p class="name">${this.data.weekDays[7].datetime}</p>
            <div class="condition">${this.data.weekDays[7].conditions}</div>
            <p class="temp"><strong>${this.data.weekDays[7].temp}</strong>/${this.data.weekDays[7].tempmin}</p>
          </div>
        </div>
        `;
  }
}

export const searchNav = new Nav();
export const mainElement = document.createElement("main");
export const updateUI = async (location) => {
  const data = await getWeatherData(location);
  mainElement.innerHTML = "";
  const todayForecast = new TodayForecast(data);
  const weekForecast = new WeekForecast(data);
  mainElement.appendChild(todayForecast.element);
  mainElement.appendChild(weekForecast.element);
};
