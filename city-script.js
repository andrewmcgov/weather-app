// Require the filesystem module from node
// to allow us to read and write files
const fs = require("fs");

// Modify this coutnry code if you want cities from a different country
const countryCode = "CA";

// Load file with all city data - must add to project directory first
let rawData = fs.readFileSync("city.list.json");
let cities = JSON.parse(rawData);

// Empty Array to add cities into
let newCities = [];

// Loop through all the cities..
cities.forEach(city => {
  // Add name and ID to our newCities array if the country code matches
  if (city.country === countryCode) {
    newCities.push({
      id: city.id,
      name: city.name
    });
  }
});

// Turn our new aray into a json string
let newData = JSON.stringify(newCities);

// Write our new, much smaller file! Call it whatever you want.
fs.writeFileSync("canadian.cities.json", newData);
