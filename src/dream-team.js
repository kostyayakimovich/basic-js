module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let clearArr = members.filter(value => typeof value === "string");
  if (clearArr.length < 1) return false;

  let masLetters = clearArr.map(function letter(value) {
    return value
      .trim()
      .charAt(0)
      .toUpperCase();
  }, "");

  let mas = masLetters.sort().join("");

  return mas;
};
