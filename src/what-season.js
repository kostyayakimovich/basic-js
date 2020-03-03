module.exports = function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  if (Object.prototype.toString.apply(date) != "[object Date]") {
    throw new Error();
  }
  let m = date.getMonth();
  if (m < 2 || m === 11) {
    return "winter";
  } else if (m >= 2 && m < 5) {
    return "spring";
  } else if (m >= 5 && m < 8) {
    return "summer";
  } else return "autumn";
};
