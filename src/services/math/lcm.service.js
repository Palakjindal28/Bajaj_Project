const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b);
exports.calculate = (arr) => {
  if (!Array.isArray(arr) || arr.length < 2) {
    throw new Error("LCM requires at least two integers");
  }
  return arr.reduce((acc, num) => lcm(acc, num));
};