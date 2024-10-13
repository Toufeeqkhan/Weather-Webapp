(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const r=async e=>{const n=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}?key=7MM7GJLC8459FAZCUADPLRZC7`,d=await fetch(n);if(d.ok){const s=await d.json();return o(s)}},o=e=>({fullData:e,address:e.address,currentDay:e.days[0],currentDayTemperature:e.days[0].temp,currentDayFeelsLike:e.days[0].feelslike,currentDayDateTime:e.days[0].datetime,currentDayConditions:e.days[0].conditions,currentDayDescription:e.days[0].description,currentDayWindSpeed:e.days[0].windspeed,currentDayHumidity:e.days[0].humidity,currentDaySunrise:e.days[0].sunrise,currentDaySunset:e.days[0].sunset,currentDayHours:e.days[0].hours,chancesOfRain:e.days[0].precipprob,UVIndex:e.days[0].uvindex,weekDays:e.days});class l{constructor(){this.element=document.createElement("nav"),this.render()}render(){this.element.innerHTML=`
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
              <img src="./images/sun.svg" alt="Sun" />
            </div>
          </div>

          <div class="hourly-forecast">
            <p>TODAY'S FORECAST</p>
            <div class="hours">
              <div class="hour">
                <p>06:00 AM</p>
                <img src="./images/sun.svg" alt="sun" />
                <p class="hourly-temp">${this.data.currentDayHours[6].temp}</p>
              </div>
              <div class="hour">
                <p>09:00 AM</p>
                <img src="./images/sun.svg" alt="sun" />
                <p class="hourly-temp">${this.data.currentDayHours[9].temp}</p>
              </div>
              <div class="hour">
                <p>12:00 PM</p>
                <img src="./images/sun.svg" alt="sun" />
                <p class="hourly-temp">${this.data.currentDayHours[12].temp}</p>
              </div>
              <div class="hour">
                <p>3:00 PM</p>
                <img src="./images/sun.svg" alt="sun" />
                <p class="hourly-temp">${this.data.currentDayHours[15].temp}</p>
              </div>
              <div class="hour">
                <p>06:00 PM</p>
                <img src="./images/sun.svg" alt="sun" />
                <p class="hourly-temp">${this.data.currentDayHours[18].temp}</p>
              </div>
              <div class="hour">
                <p>09:00 PM</p>
                <img src="./images/sun.svg" alt="sun" />
                <p class="hourly-temp">${this.data.currentDayHours[21].temp}</p>
              </div>
            </div>
          </div>

          <div class="air-conditions">
            <p>AIR CONDITIONS</p>
            <div class="conditions">
              <div class="condition">
                <img src="./images/feel.svg" alt="Feel" />
                <div class="info">
                  <h4>Feel Like</h4>
                  <p>${this.data.currentDayFeelsLike}</p>
                </div>
              </div>
              <div class="condition">
                <img src="./images/wind.svg" alt="Wind" />
                <div class="info">
                  <h4>Wind</h4>
                  <p>${this.data.currentDayWindSpeed}mph</p>
                </div>
              </div>
              <div class="condition">
                <img src="./images/rain.svg" alt="Rain" />
                <div class="info">
                  <h4>Chances of Rain</h4>
                  <p>${this.data.chancesOfRain}%</p>
                </div>
              </div>
              <div class="condition">
                <img src="./images/UV.svg" alt="UV" />
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
        `}}const h=new l,a=document.createElement("main"),u=async e=>{const t=await r(e);a.innerHTML="";const n=new p(t),d=new m(t);a.appendChild(n.element),a.appendChild(d.element)};document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("app");e.appendChild(h.element),a.innerHTML="<h1>Please Enter the City name</h1>",a.classList.add("temp-h1"),e.appendChild(a),document.getElementById("searchCityForm").addEventListener("submit",t=>{t.preventDefault();const n=document.getElementById("location").value;a.innerHTML="<h1>Please wait</h1>",a.classList.remove("temp-h1"),u(n)})});
