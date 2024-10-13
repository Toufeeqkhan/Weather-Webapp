export const getWeatherData = async (location) => {
  const accessKey = "7MM7GJLC8459FAZCUADPLRZC7";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${accessKey}`;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    const weatherInfoObject = processJSON(data);
    return weatherInfoObject;
  }
};

const processJSON = (data) => {
  return {
    fullData: data,
    address: data.address,
    currentDay: data.days[0],
    currentDayTemperature: data.days[0].temp,
    currentDayFeelsLike: data.days[0].feelslike,
    currentDayDateTime: data.days[0].datetime,
    currentDayConditions: data.days[0].conditions,
    currentDayDescription: data.days[0].description,
    currentDayWindSpeed: data.days[0].windspeed,
    currentDayHumidity: data.days[0].humidity,
    currentDaySunrise: data.days[0].sunrise,
    currentDaySunset: data.days[0].sunset,
    currentDayHours: data.days[0].hours,
    chancesOfRain: data.days[0].precipprob,
    UVIndex: data.days[0].uvindex,
    weekDays: data.days,
  };
};

//   const getLocationButton = document.getElementById('getLocationButton')
//   getLocationButton.addEventListener('click', () => {
//       const location = document.getElementById('location').value;
//       getWeatherData(location)
//   })
