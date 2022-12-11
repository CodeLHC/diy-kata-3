const humanCatDogYears = (humanYears) => {
  let catYears = 15;
  let dogYears = 15;
  if (humanYears >= 3) {
    catYears = 4 * (humanYears - 2) + 24;
    dogYears = 5 * (humanYears - 2) + 24;
  }
  if (humanYears === 2) {
    catYears = 24;
    dogYears = 24;
  }
  if (humanYears > 0) {
    return [humanYears, catYears, dogYears];
  }
  return [];
};

module.exports = humanCatDogYears;
