// const button = document.querySelector("header button");
// const search = document.querySelector("header input");

// async function fetchWeather(value) {
//   let res = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid={868104ff524bc3e1bc4a22b55cd8d22e}&units=metric`
//   );
//   let data = await res.json();
//   if (res.status === 404) {
//     document.querySelector(".error").style.display = "block";
//     document.querySelector(".weather").style.display = "none";
//   }
//   const temp = document.querySelector(".weather h1");
//   const city = document.querySelector(".weather h2");
//   const humidity = document.querySelector(".humidity");
//   const wind = document.querySelector(".wind");

//   temp.innerText = `${Math.round(data.main.temp)}°C`;
//   city.innerText = `${data.name}`;
//   humidity.innerText = `${data.main.humidity}%`;
//   wind.innerText = `${data.wind.speed} km/h`;
//   document.querySelector(".error").style.display = "none";
//   document.querySelector(".weather").style.display = "block";
//   search.value = "";
// }

// button.addEventListener("click", () => {
//   fetchWeather(search.value);
// });

const button = document.querySelector("header button");
const search = document.querySelector("header input");

async function fetchWeather(value) {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid={apikey}&units=metric`
  );
  let data = await res.json();
  if (res.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  const temp = document.querySelector(".weather h1");
  const city = document.querySelector(".weather h2");
  const humidity = document.querySelector(".humidity");
  const wind = document.querySelector(".wind");

  temp.innerText = `${Math.round(data.main.temp)}°C`;
  city.innerText = `${data.name}`;
  humidity.innerText = `${data.main.humidity}%`;
  wind.innerText = `${data.wind.speed} km/h`;
  document.querySelector(".error").style.display = "none";
  document.querySelector(".weather").style.display = "block";
  search.value = "";
}

button.addEventListener("click", () => {
  fetchWeather(search.value);
});
