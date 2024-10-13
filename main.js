import './style.css'
import { getWeatherData } from "./assets/js/logic.js";
import { todayForecast, weekForecast } from "./assets/js/ui.js";

document.addEventListener('DOMContentLoaded', () => {
  getWeatherData('london')
  const app = document.getElementById('app')
  app.appendChild(todayForecast.element)
  app.appendChild(weekForecast.element)
});




