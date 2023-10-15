let paris = {
  name: "Paris",
  country: "France",
  language: "French",
  temperature: 18,
  capitalCity: true
};

let sydney = {
  name: "Sydney",
  country: "Australia",
  language: "English",
  temperature: 25,
  capitalCity: false
};

let australianCities = ["Sydney", "Melbourne", "Canberra"];

let cities = [
  {
    name: "New York",
    country: "USA",
    language: "English",
    temperature: 15,
    capitalCity: false
  },
  {
    name: "London",
    country: "UK",
    language: "English",
    temperature: 9,
    capitalCity: true
  },
  {
    name: "Cape Town",
    country: "South Africa",
    language: "English",
    temperature: 25,
    capitalCity: true
  }
];

console.log(paris.temperature);
console.log(sydney.temperature);

console.log(australianCities[0]);
console.log(australianCities[1]);
console.log(australianCities[2]);

console.log(cities[0].name);
console.log(cities[0].temperature);

console.log(cities[1].name);
console.log(cities[1].temperature);

console.log(cities[2].name);
console.log(cities[2].temperature);
