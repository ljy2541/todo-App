const API_KEY = "8c7df7e860792624c131ec7615c70b3f";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((responce) => responce.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("날씨를 검색하는데 오류가 발생했습니다");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
