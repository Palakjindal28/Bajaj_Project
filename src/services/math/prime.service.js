const isPrime = (n) => {
  if (!Number.isInteger(n) || n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};
exports.filter = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Prime requires an array of integers");
  }
  return arr.filter(isPrime);
};
