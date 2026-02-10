exports.generate = (n) => {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Fibonacci functions only on a non-negative integer");
  }
  let a = 0, b = 1;
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(a);
    [a, b] = [b, a + b];
  }
  return result;
};