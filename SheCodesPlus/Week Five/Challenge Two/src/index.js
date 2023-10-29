function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let city = response.data.name;
  let message = `It is ${temperature} degrees in ${city}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = message;
}

let apiKey = "ed55b36e362d8733f7d859247cedeaf2";
let units = "metric";
let city = "sydney";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemperature);
