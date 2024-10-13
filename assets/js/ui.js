class TodayForecast{
    constructor(){
        this.element = document.createElement('section')
        this.element.classList.add('left')
        this.render()
    }

    render(){
        this.element.innerHTML=`
        <nav>
          <form action="">
            <input
              autocomplete="off"
              placeholder="Search for cities"
              class="location"
              type="text"
              name="location"
              id="location"
            />
          </form>
        </nav>
        <div class="today">
          <div class="current-forecast">
            <div class="info">
              <div class="info-top">
                <h2>Madrid</h2>
                <p>Chance of rain: 0%</p>
              </div>
              <div class="temp">
                <h1>32°C</h1>
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
                <p class="hourly-temp">24°C</p>
              </div>
              <div class="hour">
                <p>06:00 AM</p>
                <img src="./assets/images/sun.svg" alt="sun" />
                <p class="hourly-temp">24°C</p>
              </div>
              <div class="hour">
                <p>06:00 AM</p>
                <img src="./assets/images/sun.svg" alt="sun" />
                <p class="hourly-temp">24°C</p>
              </div>
              <div class="hour">
                <p>06:00 AM</p>
                <img src="./assets/images/sun.svg" alt="sun" />
                <p class="hourly-temp">24°C</p>
              </div>
              <div class="hour">
                <p>06:00 AM</p>
                <img src="./assets/images/sun.svg" alt="sun" />
                <p class="hourly-temp">24°C</p>
              </div>
              <div class="hour">
                <p>06:00 AM</p>
                <img src="./assets/images/sun.svg" alt="sun" />
                <p class="hourly-temp">24°C</p>
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
                  <p>24°C</p>
                </div>
              </div>
              <div class="condition">
                <img src="./assets/images/wind.svg" alt="Wind" />
                <div class="info">
                  <h4>Wind</h4>
                  <p>10 mph</p>
                </div>
              </div>
              <div class="condition">
                <img src="./assets/images/rain.svg" alt="Rain" />
                <div class="info">
                  <h4>Chances of Rain</h4>
                  <p>0%</p>
                </div>
              </div>
              <div class="condition">
                <img src="./assets/images/UV.svg" alt="UV" />
                <div class="info">
                  <h4>UV Index</h4>
                  <p>4%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        `
    }
}
class WeekForecast{
    constructor(){
        this.element = document.createElement('section')
        this.element.classList.add('right')
        this.render()
    }

    render(){
        this.element.innerHTML=`
        <div class="week-forecast">
          <p>7-DAY FORECAST</p>
          <div class="day">
            <p class="name">Today</p>
            <div class="condition">Sunny</div>
            <p class="temp"><strong>36</strong>/22</p>
          </div>
          <div class="day">
            <p class="name">Today</p>
            <div class="condition">Sunny</div>
            <p class="temp"><strong>36</strong>/22</p>
          </div>
          <div class="day">
            <p class="name">Today</p>
            <div class="condition">Sunny</div>
            <p class="temp"><strong>36</strong>/22</p>
          </div>
          <div class="day">
            <p class="name">Today</p>
            <div class="condition">Sunny</div>
            <p class="temp"><strong>36</strong>/22</p>
          </div>
          <div class="day">
            <p class="name">Today</p>
            <div class="condition">Sunny</div>
            <p class="temp"><strong>36</strong>/22</p>
          </div>
          <div class="day">
            <p class="name">Today</p>
            <div class="condition">Sunny</div>
            <p class="temp"><strong>36</strong>/22</p>
          </div>
        </div>
        `
    }
}

export const todayForecast = new TodayForecast()
export const weekForecast = new WeekForecast()