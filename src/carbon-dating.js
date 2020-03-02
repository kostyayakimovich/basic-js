const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = 0.693 / HALF_LIFE_PERIOD;
module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string" || !sampleActivity) {
    return false;
  }
  let sample = parseFloat(sampleActivity);
  if (sample <= 0 || sample > MODERN_ACTIVITY || isNaN(sample)) {
    return false;
  }
  let a = Math.log(MODERN_ACTIVITY / sample);
  let result = Math.floor(a / k);

  return result + 1;
};
