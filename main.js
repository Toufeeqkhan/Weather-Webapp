import "./style.css";
import { mainElement, searchNav, updateUI } from "./assets/js/ui.js";
// import { todayForecast, weekForecast } from "./assets/js/ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  app.appendChild(searchNav.element);
  mainElement.innerHTML = `<h1>Please Enter the City name</h1>`
  mainElement.classList.add('temp-h1')
  app.appendChild(mainElement);
  //  updateUI('New York')
  
  document
  .getElementById("searchCityForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const city = document.getElementById("location").value;
    mainElement.innerHTML = `<h1>Please wait</h1>`
    mainElement.classList.remove('temp-h1')
    updateUI(city);
    });
});
