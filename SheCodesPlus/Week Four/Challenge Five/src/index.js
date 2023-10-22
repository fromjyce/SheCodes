// Challenge 1
// Log li with id special
let specialCountry = document.querySelector("li#special");
console.log(specialCountry);

// Challenge 2
// Log all li with class of country
let countries = document.querySelectorAll("li.country");
console.log(countries);

// Challenge 3
// Add class special to the li with id special
specialCountry.classList.add("special");

// Challenge 4
// In your code, replace the content of the element with id special
// by your favorite country (other than Portugal of course)
specialCountry.innerHTML = "Thailand 🇹🇭";
