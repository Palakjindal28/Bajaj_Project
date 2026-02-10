const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
exports.calculate = (arr) => {
  if (!Array.isArray(arr) || arr.length < 2) {
    throw new Error("HCF requires at least two integers");
  }
  return arr.reduce((acc, num) => gcd(acc, num));
};