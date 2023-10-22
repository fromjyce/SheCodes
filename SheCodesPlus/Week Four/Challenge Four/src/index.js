let currentTime = new Date();

// Challenge 1
console.log(currentTime);

// Challenge 2
console.log(currentTime.getMilliseconds());

// Challenge 3
console.log(currentTime.getDay());

// Challenge 4
console.log(currentTime.getFullYear());

// Challenge 5
console.log(currentTime.getMonth());

// Challenge 6

// Challenge 7
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();

  let formattedDate = `Today is ${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;

  return formattedDate;
}

console.log(formatDate(currentTime));
