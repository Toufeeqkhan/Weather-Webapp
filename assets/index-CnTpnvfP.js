(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();const r=async s=>{const n=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${s}?key=7MM7GJLC8459FAZCUADPLRZC7`,d=await fetch(n);if(d.ok){const e=await d.json();return o(e)}},o=s=>({fullData:s,address:s.address,currentDay:s.days[0],currentDayTemperature:s.days[0].temp,currentDayFeelsLike:s.days[0].feelslike,currentDayDateTime:s.days[0].datetime,currentDayConditions:s.days[0].conditions,currentDayDescription:s.days[0].description,currentDayWindSpeed:s.days[0].windspeed,currentDayHumidity:s.days[0].humidity,currentDaySunrise:s.days[0].sunrise,currentDaySunset:s.days[0].sunset,currentDayHours:s.days[0].hours,chancesOfRain:s.days[0].precipprob,UVIndex:s.days[0].uvindex,weekDays:s.days});class l{constructor(){this.element=document.createElement("nav"),this.render()}render(){this.element.innerHTML=`
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
`}}class p{constructor(t){this.element=document.createElement("section"),this.data=t,this.element.classList.add("left"),this.render()}render(){this.element.innerHTML=`
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
        `}}class m{constructor(t){this.element=document.createElement("section"),this.element.classList.add("right"),this.data=t,this.render()}render(){this.element.innerHTML=`
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
        `}}const h=new l,i=document.createElement("main"),u=async s=>{const t=await r(s);i.innerHTML="";const n=new p(t),d=new m(t);i.appendChild(n.element),i.appendChild(d.element)};document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("app");s.appendChild(h.element),i.innerHTML="<h1>Please Enter the City name</h1>",i.classList.add("temp-h1"),s.appendChild(i),document.getElementById("searchCityForm").addEventListener("submit",t=>{t.preventDefault();const n=document.getElementById("location").value;i.innerHTML="<h1>Please wait</h1>",i.classList.remove("temp-h1"),u(n)})});
