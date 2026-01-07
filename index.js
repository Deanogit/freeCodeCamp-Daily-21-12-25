// Daylight Hours
// December 21st is the winter solstice for the northern hemisphere and the summer solstice for the southern hemisphere. That means it's the day with the least daylight in the north and the most daylight in the south.

// Given a latitude number from -90 to 90, return a rough approximation of daylight hours on the solstice using the following table:

// Latitude	Daylight Hours
// -90	24
// -75	23
// -60	21
// -45	15
// -30	13
// -15	12
// 0	12
// 15	11
// 30	10
// 45	9
// 60	6
// 75	2
// 90	0
// If the given latitude does not exactly match a table entry, use the value of the closest latitude.

function daylightHours(latitude) {
  console.log(latitude);
  const latHours = {
    '-90': 24,
    '-75': 23,
    '-60': 21,
    '-45': 15,
    '-30': 13,
    '-15': 12,
    0: 12,
    15: 11,
    30: 10,
    45: 9,
    60: 6,
    75: 2,
    90: 0,
  };

  // find the smallest difference from the input
  // get all keys
  const keysArr = Object.keys(latHours);
  console.log(keysArr);
  // two variables, keep track of closestLat & minDifference
  let closestLat = keysArr[0]; // start by assuming the first key is the winner
  let minDifference = Infinity; // start with a huge number

  // loop through keys
  keysArr.forEach((key) => {
    // // for each key, calculate the absolute difference between it and your latitude
    // // use Math.abs(input - key) to get difference
    const currentDifference = Math.abs(latitude - key);
    console.log(minDifference);

    // Update: if current difference is smaller than your minDifference, update your "closest" variables
    if (currentDifference < minDifference) {
      minDifference = currentDifference; // update the "score to beat"
      closestLat = key; // save the actual latitude key
    }
  });

  console.log(closestLat);

  return latHours[closestLat];
  //  return latitude;
}
