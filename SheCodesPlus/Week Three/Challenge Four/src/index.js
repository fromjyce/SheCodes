// Challenge 1
// Create an array weekDays with all days of the week, console log the array
const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
weekdays.forEach(function (day) {
  console.log(day);
});
// Challenge 2
// Log ‘Monday’ and ‘Sunday’
console.log("Monday");
console.log("Sunday");
// Challenge 3
// Change ‘Sunday’ by ‘Funday’
// Log the array
const indexToReplace = weekdays.indexOf("Sunday");
if (indexToReplace !== -1) {
  weekdays.splice(indexToReplace, 1, "Funday");
}
console.log(weekdays);

// Challenge 4
// Remove Monday and Tuesday
// Log the array
weekdays.shift();
weekdays.shift();

// Challenge 5
// Log every day of the week this way:`Temperature on Monday is 18 degrees’
weekdays.forEach(function (day) {
  console.log("Temperature on " + day + " is 18 degrees");
});
