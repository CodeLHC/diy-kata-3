const reachDestination = (distance, speed) => {
  const isNumber = typeof speed === "number" && typeof distance === "number";
  if (isNumber) {
    const hoursToArrive = distance / speed;
    const hoursRounded = Math.round(hoursToArrive * 2) / 2;
    return `I should be there in ${hoursRounded} hours`;
  }
  return "please use numbers";
};

module.exports = reachDestination;
